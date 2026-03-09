import type { FieldFiltered } from "./FieldFiltered";
import type { FilterChildren } from "./FilterChildren";
import type { FilterContext } from "./FilterContext";
import type { IntrinsicFilter } from "./IntrinsicFilter";

/**
 * Settings to use when doing a query.
 */
export type QuerySettings<T> = {
  /**
   * Path to the field that contains the path value of an item, used for displaying items in a tree.
   */
  pathField?: FieldFiltered<T, string>;
  /**
   * String used to escape the separator.
   *
   * @default "\\"
   */
  pathFieldSeparatorEscape?: string;
  /**
   * Maps path fields to a string used to separate the path nodes of a field value.
   *
   * @default "/"
   */
  pathFieldSeparator?: string;
  /**
   * Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren` or `FilterContext`.
   *
   * @param filter The provided `FilterChildren` to express.
   * @returns A filter that captures the items expressed by the provided `FilterChildren`.
   */
  transformFilterChildren?: (filter: FilterChildren<T>) => IntrinsicFilter<T>;
  /**
   * Returns a filter that captures the items expressed by the provided `FilterContext`. The return filter cannot use filters of type `FilterContext` or `FilterChildren`.
   *
   * @param filter
   * @returns
   */
  transformFilterContext?: (filter: FilterContext<T>) => IntrinsicFilter<T>;
  /**
   * Abort signal to abort the query.
   */
  signal?: AbortSignal;
  /**
   * Abort controller to abort the query.
   */
  abortController?: AbortController;
};
