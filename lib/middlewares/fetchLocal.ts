import { queryItemList } from "../tools/queryItemList";
import type { CustomFieldMap, Handler, Query } from "../types";

/**
 * Performs the fetch query on local data.
 *
 * @returns Promise that resolves to the response.
 */
export function fetchLocal<
  T extends object,
  C extends CustomFieldMap<T>,
>(): Handler<Query<T, C> & { type: T[] }, any, never, never> {
  return async (query, _) => queryItemList<T, C>(query);
}
