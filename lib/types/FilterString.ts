import type { FieldFiltered } from "./FieldFiltered";
import type { Locale } from "./Locale";
import type { Value } from "./Value";

/**
 * Checks if a given string field matches a given string value according to a given operator.
 */
export type FilterString<T> = {
  operator:
    | "equal"
    // FIXME: Redundant with `"not"` operator
    | "notEqual"
    | "startWith"
    | "endWith"
    | "include"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: FieldFiltered<T, string>;
  options?: Intl.CollatorOptions;
  locale?: Locale;
} & Value<T, string>;
