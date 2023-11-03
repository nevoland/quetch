import { queryItemList } from "../tools/queryItemList";
import type { CustomFieldMap, Handler, Query } from "../types";

/**
 * Performs the fetch query on local data.
 *
 * @returns Promise that resolves to the response.
 */
export function fetchLocal<T extends object>(): Handler<
  Query<T, {}> & { type: T[]; customFields: never },
  any,
  never,
  never
>;
export function fetchLocal<
  T extends object,
  C extends CustomFieldMap<T>,
>(): Handler<Query<T, C> & { type: T[]; customFields: C }, any, never, never>;
export function fetchLocal<
  T extends object,
  C extends CustomFieldMap<T>,
>(): Handler<
  Query<T, C> & { type: T[]; customFields: C | never },
  any,
  never,
  never
> {
  return async (query, _) => queryItemList(query);
}
