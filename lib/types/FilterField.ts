/**
 * Checks if a given field exists.
 */
export type FilterField<T extends object> = {
  operator: "exist";
  /**
   * The field name for which to check its existence.
   */
  value: keyof T;
};
