import type { FilterKeys } from "./FilterKeys";

/**
 * Formats the date found in a given field, which can be an ISO string date or a timestamp.
 */
export type FieldFunctionFormatDate<T extends object> = {
  operator: "formatDate";
  field: FilterKeys<T, string | number>;
  format: string;
};
