import type { FieldFiltered } from "./FieldFiltered";

/**
 * Checks if a given number field matches a given number value according to a given operator.
 */
export type FilterNumber<T extends object> = {
  operator:
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: FieldFiltered<T, number>;
  value: number;
};
