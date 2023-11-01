import type { Filter } from "./Filter";
import type { Order } from "./Order";

/**
 * Query for reading a single item.
 */
export type QueryRead<T extends object> = {
  method?: "read";
  multiple?: false;
  offset?: never;
  group?: never;
  /**
   * Item fields to pick. If omitted, all fields are picked.
   */
  fields?: readonly (keyof T)[];
  /**
   * Filter for finding the item, if it cannot be found based on the `context`.
   */
  filter?: Filter<T>;
  /**
   * Order by which the items should be sorted.
   */
  order?: Order<T>[];
};
