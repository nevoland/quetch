import type { Any } from "./Any";
import type { FieldFiltered } from "./FieldFiltered";
import type { Value } from "./Value";

/**
 * Checks if a given array field matches a given array value according to a given operator.
 */
export type FilterArray<T extends object, P = Any> = {
  operator: "equal" | "include" | "intersect";
  field: FieldFiltered<T, P[]>;
} & Value<T, P[]>;
