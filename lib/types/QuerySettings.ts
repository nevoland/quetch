import type { Field } from "./Field";
import type { FilterChildren } from "./FilterChildren";
import type { IntrinsicFilter } from "./IntrinsicFilter";

/**
 * Settings to use when doing a query.
 */
export type QuerySettings<T> = {
  /**
   * Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren` or `FilterContext`.
   *
   * @param filter The provided `FilterChildren` to express.
   * @returns A filter that captures the items expressed by the provided `FilterChildren`.
   */
  transformFilterChildren?: (filter: FilterChildren<T>) => IntrinsicFilter<T>;
  /**
   * Compares two values of a field for sorting purposes. If not provided, values are compared using the default comparison operators (`>`, `<`, `===`).
   *
   * This function is called only when both `a` and `b` are defined and different. If it returns `undefined`, the default comparison operators are used as a fallback.
   *
   * @param a - The first value to compare.
   * @param b - The second value to compare.
   * @param field - The field for which the values are compared.
   * @returns `-1` if `a` should be sorted before `b`, `1` if `a` should be sorted after `b`, `0` if they are considered equal, or `undefined` to use the default comparison operators.
   */
  compareFieldValues?<T>(
    field: Field<T>,
    a: NonNullable<any>,
    b: NonNullable<any>,
  ): -1 | 0 | 1 | undefined;
  /**
   * Abort signal to abort the query.
   */
  signal?: AbortSignal;
  /**
   * Abort controller to abort the query.
   */
  abortController?: AbortController;
};
