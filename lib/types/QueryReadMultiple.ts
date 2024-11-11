import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Group } from "./Group";
import type { Order } from "./Order";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for getting a list of items.
 */
export type QueryReadMultiple<T extends object> = {
  method?: "read";
  multiple: true;
  /**
   * Common item properties to use for identifying the item.
   */
  context?: Context<T>;
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
  order?: readonly Order<T>[];
  /**
   * Groups items by specified fields.
   */
  group?: readonly Group<T>[];
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
