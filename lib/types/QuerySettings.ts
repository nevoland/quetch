import type { FieldFiltered } from "./FieldFiltered";
import type { FieldMap } from "./FieldMap";
import type { Filter } from "./Filter";
import type { FilterChildren } from "./FilterChildren";
import type { ValueMap } from "./ValueMap";

/**
 * Settings to use when doing a query.
 */
export type QuerySettings<T> = {
  /**
   * Path to the field that contains the path value of an item, used for displaying items in a tree.
   */
  pathFieldKey?: FieldFiltered<T, string>;
  /**
   * String used to escape the separator.
   *
   * @default "\\"
   */
  fieldSeparatorEscape?: string;
  /**
   * Maps path fields to a string used to separate the path nodes of a field value.
   */
  fieldSeparatorMap?: FieldMap<T, string> | ValueMap<T, string>;
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
