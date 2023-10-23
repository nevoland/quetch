import { RequestError } from "../errors";
import type {
  AggregateFunction,
  AggregateFunctionOperator,
  Context,
  CustomFieldMap,
  Filter,
  Order,
  Query,
} from "../types";

import { filterFromContext } from "./filterFromContext";
import { filterItem } from "./filterItem";
import { sortItemList } from "./sortItemList";

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

export function queryItemList<T extends object, C extends CustomFieldMap<T>>(
  query: Query<T, C> & { type: T[] },
) {
  const data = query.type as T[];
  switch (query.method) {
    case "get":
    case undefined: {
      const { filter, context } = query;
      if (query.multiple) {
        const { offset = 0, limit = Infinity, orderBy } = query;
        // Filter
        let result = data;
        if (context !== undefined || filter !== undefined) {
          const normalizedFilter = mergeContextAndFilter(
            context,
            filter as Filter<T>,
          );
          result = data.filter((item) => filterItem(normalizedFilter, item));
        }
        // Sort
        result = sortItemList(
          orderBy as Order<T>[],
          result === data ? [...data] : result,
        );
        // Slice
        if (offset !== 0 || limit !== Infinity) {
          result = result.slice(offset, offset + limit);
        }
        return result;
      }
      const normalizedFilter = mergeContextAndFilter(
        context,
        filter as Filter<T>,
      );
      const result = data.find((item) => filterItem(normalizedFilter, item));
      if (result === undefined) {
        throw new RequestError("Not found", 404, query);
      }
      return result;
    }
    case "aggregate": {
      const { context, filter, aggregator } = query;
      switch (normalizeAggregator(aggregator)) {
        case "length": {
          if (filter === undefined && context === undefined) {
            return data.length;
          }
          const normalizedFilter = mergeContextAndFilter(
            context,
            filter as Filter<T>,
          );
          return data.reduce((result, item) => {
            if (filterItem(normalizedFilter, item)) {
              return result + 1;
            }
            return result;
          }, 0);
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