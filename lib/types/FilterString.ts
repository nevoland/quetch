import type { FieldFiltered } from "./FieldFiltered";
import type { Locale } from "./Locale";

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
  field: FieldFiltered<T, string>;
  value: string;
  options?: Intl.CollatorOptions;
  locale?: Locale;
};
