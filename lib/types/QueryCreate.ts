/**
 * Query for creating an item.
 */
export type QueryCreate<T extends object> = {
  method: "create";
  value: Partial<T>;
};
