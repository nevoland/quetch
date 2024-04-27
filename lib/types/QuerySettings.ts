import type { FieldFiltered } from "./FieldFiltered";
import type { Filter } from "./Filter";
import type { FilterChildren } from "./FilterChildren";

/**
 * Settings to use when doing a query.
 */
export type QuerySettings<T extends object> = {
  /**
   * String used to separate the path nodes of an item.
   */
  pathFieldSeparator?: string;
  /**
   * Field key to that contains the path value of an item.
   */
  pathFieldKey?: FieldFiltered<T, string>;
  /**
   * Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren`.
   *
   * @param filter The provided `FilterChildren` to express.
   * @returns A filter that captures the items expressed by the provided `FilterChildren`.
   */
  transformFilterChildren?: (
    filter: FilterChildren<T>,
  ) => Exclude<Filter<T>, { operator: "children" }>;
  /**
   * Abort signal to abort the query.
   */
  signal?: AbortSignal;
  /**
   * Abort controller to abort the query.
   */
  abortController?: AbortController;
};
