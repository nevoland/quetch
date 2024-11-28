/**
 * Applies a custom field transform function.
 */
export type FieldFunctionCustom<T> = {
  operator: "custom";
  value: (item: T) => any;
};
