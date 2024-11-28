import type { FieldFiltered } from "./FieldFiltered";
import type { Value } from "./Value";

/**
 * Checks if a given array field matches a given array value according to a given operator:
 *
 * - `equal` matches the exact content of the array.
 * - `include` requires every value to be present in the array.
 * - `intersect` requires at least one item of the value to be present in the array.
 */
export type FilterArray<T, P = any> = {
  operator: "equal" | "include" | "intersect";
  field: FieldFiltered<T, P[]>;
} & Value<T, P[]>;
