import type { FieldFiltered } from "./FieldFiltered";

/**
 * Formats the date found in a given field, which can be an ISO string date or a timestamp.
 */
export type FieldFunctionFormatDate<T> = {
  operator: "formatDate";
  field: FieldFiltered<T, string | number>;
  format: string;
};
