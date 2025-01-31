import type { Field } from "./Field";

/**
 * Checks if a given field exists.
 */
export type FilterField<T> = {
  operator: "exist" | "notExist";
  /**
   * The field name or path for which to check its existence.
   */
  field: Field<T>;
};
