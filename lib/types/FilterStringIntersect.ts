import type { FieldFiltered } from "./FieldFiltered";
import type { Locale } from "./Locale";
import type { Value } from "./Value";

/**
 * Checks if a given string field has any of the provided values.
 */
export type FilterStringIntersect<T> = {
  operator: "intersect";
  field: FieldFiltered<T, string>;
  options?: Intl.CollatorOptions;
  locale?: Locale;
} & Value<T, readonly string[]>;
