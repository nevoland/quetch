import type { FilterKeys } from "./FilterKeys";
import type { Locale } from "./Locale";

/**
 * Checks if a given string field has any of the provided values.
 */
export type FilterStringIntersect<T extends object> = {
  operator: "intersect";
  field: FilterKeys<T, string>;
  value: string[];
  options?: Intl.CollatorOptions;
  locale?: Locale;
};
