/**
 * Applies a custom field transform function.
 */
export type FieldFunctionCustom<T extends object> = {
  operator: "custom";
  value: (item: T) => any;
};
