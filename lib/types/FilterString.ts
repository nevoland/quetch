import type { FilterKeys } from "./FilterKeys";

/**
 * Checks if a given string field matches a given string value according to a given operator.
 */
export type FilterString<T extends object> = {
  operator:
    | "equal"
    | "notEqual"
    | "startWith"
    | "endWith"
    | "include"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: FilterKeys<T, string>;
  value: string;
};
