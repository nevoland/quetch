import type { FieldFiltered } from "./FieldFiltered";
import type { Value } from "./Value";

/**
 * Checks if a given number field matches a given number value according to a given operator.
 */
export type FilterNumber<T> = {
  operator:
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: FieldFiltered<T, number>;
} & Value<T, number>;
