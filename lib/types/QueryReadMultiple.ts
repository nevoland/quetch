import type { Filter } from "./Filter";
import type { Group } from "./Group";
import type { Order } from "./Order";

/**
 * Query for getting a list of items.
 */
export type QueryReadMultiple<T extends object> = {
  method?: "read";
  multiple: true;
  /**
   * Offset of the first matching item.
   */
  offset?: number;
  /**
   * Upper bound of the number of items to return.
   */
  limit?: number;

  /**
   * Item fields to pick. If omitted, all fields are picked.
   */
  fields?: readonly (keyof T)[];
  /**
   * Filter that picks the items.
   */
  filter?: Filter<T>;
  /**
   * Order by which the items should be sorted.
   */
  order?: Order<T>[];
  /**
   * Groups items by specified fields.
   */
  group?: Group<T>[];
};
