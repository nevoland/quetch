import type { Any } from "./Any";
import type { FilterKeys } from "./FilterKeys";

/**
 * Checks if a given array field matches a given array value according to a given operator.
 */
export type FilterArray<T extends object, P = Any> = {
  operator: "equal" | "include" | "intersect";
  field: FilterKeys<T, P[]>;
  value: P[];
};
