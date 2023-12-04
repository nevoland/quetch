import { RequestError } from "../errors.js";
import type {
  AggregateFunction,
  AggregateFunctionOperator,
  Context,
  CustomFieldMap,
  Filter,
  Order,
  Query,
  QueryAny,
  Result,
} from "../types.js";

import { filterFromContext } from "./filterFromContext.js";
import { filterItem } from "./filterItem.js";
import { sortItemList } from "./sortItemList.js";

function mergeContextAndFilter<T extends object>(
  context?: Context<T>,
  filter?: Filter<T>,
): Filter<T> {
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
): AggregateFunctionOperator {
  if (aggregator === "length") {
    return aggregator;
  }
  return aggregator.operator;
}

function queryItemList<T extends object, const Q extends Query<T, undefined>>(
  query: Q & { type: T[]; customFields?: never },
): Result<T, Q, undefined>;
function queryItemList<
  T extends object,
  const Q extends Query<T, C>,
  const C extends CustomFieldMap<T>,
>(query: Q & { type: T[]; customFields: C }): Result<T, Q, C>;
function queryItemList<
  T extends object,
  const Q extends Query<T, C>,
  const C extends CustomFieldMap<T>,
>(query: Q & { type: T[]; customFields?: C }): Result<T, Q, C> {
  const data = query.type as T[];
  switch (query.method) {
    case "read":
    case undefined: {
      const { filter, context } = query;
      if (query.multiple) {
        const { offset = 0, limit = Infinity, order } = query;
        // Filter
        let result = data;
        if (context !== undefined || filter !== undefined) {
          const normalizedFilter = mergeContextAndFilter(
            context,
            filter as Filter<T>,
          );
          result = data.filter((item) =>
            filterItem(normalizedFilter, item, query.settings),
          );
        }
        // Sort
        result = sortItemList(
          order as Order<T>[],
          result === data ? [...data] : result,
        );
        // Slice
        if (offset !== 0 || limit !== Infinity) {
          result = result.slice(offset, offset + limit);
        }
        return result as Result<T, Q, C>;
      }
      const normalizedFilter = mergeContextAndFilter(
        context,
        filter as Filter<T>,
      );
      const result = data.find((item) =>
        filterItem(normalizedFilter, item, query.settings),
      );
      if (result === undefined) {
        throw new RequestError("Not found", 404, query as QueryAny);
      }
      return result as Result<T, Q, C>;
    }
    case "aggregate": {
      const { context, filter, aggregator } = query;
      switch (normalizeAggregator(aggregator)) {
        case "length": {
          if (filter === undefined && context === undefined) {
            return data.length as Result<T, Q, C>;
          }
          const normalizedFilter = mergeContextAndFilter(
            context,
            filter as Filter<T>,
          );
          return data.reduce((result, item) => {
            if (filterItem(normalizedFilter, item, query.settings)) {
              return result + 1;
            }
            return result;
          }, 0 as number) as Result<T, Q, C>;
        }
        default: {
          throw new Error("Not implemented");
        }
      }
    }
    default: {
      throw new Error(`Unknown query method '${query.method}'`);
    }
  }
}

export { queryItemList };
