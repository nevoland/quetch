import { queryItemList } from "../tools/queryItemList.js";
import type { Handler, Query } from "../types";

/**
 * Performs the fetch query on local data.
 *
 * @returns Promise that resolves to the response.
 */
export function fetchLocal<T>(): Handler<
  Query<T> & { type: T[] },
  any,
  never,
  never
> {
  return async (query, _) => queryItemList(query);
}
