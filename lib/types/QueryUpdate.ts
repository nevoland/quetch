import type { Filter } from "./Filter";

/**
 * Query for updating an item.
 */
export type QueryUpdate<T extends object> = {
  method: "update";
  multiple?: false;
  /**
   * Partial property values to update.
   */
  value: Partial<T>;
  /**
   * Filter for finding the item, if it cannot be found based on the `context`.
   */
  filter?: Filter<T>;
  offset?: never;
  order: never;
  group?: never;
};
