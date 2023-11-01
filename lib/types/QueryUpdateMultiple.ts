import type { Filter } from "./Filter";
import type { Order } from "./Order";

/**
 * Query for updating multiple items.
 */
export type QueryUpdateMultiple<T extends object> = {
  method: "update";
  multiple: true;
  /**
   * Partial property values to update.
   */
  value: Partial<T>[];
  filter?: Filter<T>;
  /**
   * Order by which the items should be sorted.
   */
  order?: Order<T>[];
  /**
   * Offset of the first matching item to update.
   */
  offset?: number;
  /**
   * Sets the upper bound of the number of items to update.
   */
  limit?: number;
};
