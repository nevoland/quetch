/**
 * Query for creating multiple items.
 */
export type QueryCreateMultiple<T extends object> = {
  method: "create";
  multiple: true;
  value: Partial<T>[];
};
