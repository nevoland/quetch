/**
 * Checks if a given field exists.
 */
export type FilterField<T extends object> = {
  operator: "exist";
  field: keyof T;
};
