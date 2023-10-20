import { RequestError } from "../errors/RequestError";
import type { AnyQuery, Handler } from "../types";

/**
 * Performs the fetch query on local data.
 *
 * @returns Promise that resolves to the response.
 */
export function fetchLocal(): Handler<
  AnyQuery & { type: any[] },
  any,
  never,
  never
> {
  return async (query, _) => {
    const { type: data, method } = query;
    switch (method) {
      case "get":
      case undefined: {
        if (query.multiple) {
          const { filter, offset = 0, limit = Infinity, orderBy } = query;
          let result =
            filter === undefined
              ? data
              : data.filter((item) => testFilter(item, filter));
          if (orderBy !== undefined) {
            if (result === data) {
              result = [...data]
              result.sort((a, b) => {
                for (let index = 0; index < orderBy.length; index++) {
                  const { field, descending } = orderBy[index];
                  if ()
                }
              })
            }
          }
        }

        // FIXME: Using `omitBy` makes `find` find return the first item if `id` is `null`
        const result = find(data, omitBy(query.value, isNil));
        if (result == null) {
          throw new RequestError("Not found", 404, query);
        }
        return result;
      }
      case "aggregate": {
        const {
          filter: { filter: expression } = {},
          order,
          start = 0,
          limit = Infinity,
        } = query;
        // TODO: Check if filter `expression` is really empty
        let result = expression
          ? filter(data, (value) => testFilter(value, expression))
          : data;
        result = order ? sort(result, order) : result;
        result =
          start !== 0 || limit !== Infinity
            ? slice(result, start, start + limit)
            : result;
        switch (method) {
          case "count":
            return result.length;
          case "find":
            if (result.length === 0) {
              throw new QueryError("Not found", 404, undefined, query);
            }
            return result[0];
          default:
            return result;
        }
      }
      default: {
        throw new Error(`Method ${method} not supported on local data`);
      }
    }
  };
}

import { filter, find, isNil, omitBy, slice } from "lodash";
import { QueryError } from "realue";

import { sort } from "./sort";
import { testFilter } from "./testFilter";

export function resultFromQuery(query) {
  const { type: data, method } = query;
  switch (method) {
    case "count":
    case "list":
    case "find": {
      const {
        filter: { filter: expression } = {},
        order,
        start = 0,
        limit = Infinity,
      } = query;
      // TODO: Check if filter `expression` is really empty
      let result = expression
        ? filter(data, (value) => testFilter(value, expression))
        : data;
      result = order ? sort(result, order) : result;
      result =
        start !== 0 || limit !== Infinity
          ? slice(result, start, start + limit)
          : result;
      switch (method) {
        case "count":
          return result.length;
        case "find":
          if (result.length === 0) {
            throw new QueryError("Not found", 404, undefined, query);
          }
          return result[0];
        default:
          return result;
      }
    }
    case "get":
    default: {
      // FIXME: Using `omitBy` makes `find` find return the first item if `id` is `null`
      const result = find(data, omitBy(query.value, isNil));
      if (result == null) {
        throw new QueryError("Not found", 404, undefined, query);
      }
      return result;
    }
  }
}
