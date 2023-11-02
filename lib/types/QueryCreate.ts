/**
 * Query for creating an item.
 */
export type QueryCreate<T extends object> = {
  method: "create";
  multiple?: false;
  value: Partial<T>;
};
