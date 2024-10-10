import { RequestError } from "../errors.js";
import type {
  AggregateFunction,
  Context,
  Filter,
  Query,
  Result,
} from "../types.js";

import { filterFromContext } from "./filterFromContext.js";
import { sortItemList } from "./sortItemList.js";
import { testFilter } from "./testFilter.js";

function mergeContextAndFilter<T extends object>(
  context?: Context<T>,
  filter?: Filter<T>,
): Filter<T> | undefined {
  if (context === undefined && filter === undefined) {
    return undefined;
  }
  if (context === undefined) {
    return filter ?? { operator: "any" };
  }
  if (filter === undefined) {
    return filterFromContext(context);
  }
  return {
    operator: "all",
    value: [filterFromContext(context), filter],
  };
}

function normalizeAggregator<T extends object>(
  aggregator: AggregateFunction<T>,
): Exclude<AggregateFunction<T>, string> {
  if (typeof aggregator === "string") {
    return { operator: aggregator };
  }
  return aggregator;
}

/**
 * Performs a provided `query` on local data, provided through the `query.type` property.
 *
 * @param query The query to perform.
 * @returns The result of the query.
 */
export function queryItemList<T extends object, const Q extends Query<T>>(
  query: Q & { type: T[] },
): Result<T, Q> {
  const data = query.type as T[];
  switch (query.method) {
    case "read":
    case undefined: {
      const {
        filter,
        context,
        offset = 0,
        limit = Infinity,
        order,
        multiple = false,
        settings,
      } = query;
      // Filter
      let result = data;
      const normalizedFilter = mergeContextAndFilter(context, filter);
      if (!multiple && offset === 0 && order === undefined) {
        const item =
          normalizedFilter === undefined
            ? result[0]
            : result.find((item) =>
                testFilter(normalizedFilter, item, settings),
              );
        if (item === undefined) {
          throw new RequestError("Not found", 404, query as Query<any>);
        }
        return item as Result<T, Q>;
      }
      // Filter
      if (normalizedFilter !== undefined) {
        result = data.filter((item) =>
          testFilter(normalizedFilter, item, settings),
        );
      }
      // Sort
      result = sortItemList(order, result);
      // Slice
      if (offset !== 0 || limit !== Infinity) {
        result = result.slice(offset, offset + limit);
      }
      if (!multiple) {
        const item = result[0];
        if (item === undefined) {
          throw new RequestError("Not found", 404, query as Query<any>);
        }
        return item as Result<T, Q>;
      }
      return result as Result<T, Q>;
    }
    case "aggregate": {
      const { context, filter, aggregator, settings } = query;
      const normalizedAggregator = normalizeAggregator(aggregator);
      switch (normalizedAggregator.operator) {
        case "length": {
          const normalizedFilter = mergeContextAndFilter(context, filter);
          if (normalizedFilter === undefined) {
            return data.length as Result<T, Q>;
          }
          return data.reduce((result, item) => {
            if (testFilter(normalizedFilter, item, settings)) {
              return result + 1;
            }
            return result;
          }, 0 as number) as Result<T, Q>;
        }
        case "index": {
          const { offset = 0, order, limit = Infinity } = query;
          const { filter: filterItem, last } = normalizedAggregator;
          let result = data;
          // Filter
          const normalizedFilter = mergeContextAndFilter(context, filter);
          if (normalizedFilter !== undefined) {
            result = data.filter((item) =>
              testFilter(normalizedFilter, item, settings),
            );
          }
          // Sort
          result = sortItemList(order, result);
          // Slice
          if (offset !== 0 || limit !== Infinity) {
            result = result.slice(offset, offset + limit);
          }
          if (result.length === 0) {
            return -1 as Result<T, Q>;
          }
          if (filterItem === undefined) {
            return (last ? result.length - 1 : 0) as Result<T, Q>;
          }
          return result[last ? "findLastIndex" : "findIndex"]((item) =>
            testFilter(filterItem, item, settings),
          ) as Result<T, Q>;
        }
        default: {
          throw new Error(
            `Aggregator operator "${normalizedAggregator.operator}" is not implemented`,
          );
        }
      }
    }
    default: {
      throw new Error(`Unknown query method '${query.method}'`);
    }
  }
}
