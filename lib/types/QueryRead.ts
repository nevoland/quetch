import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Order } from "./Order";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for reading a single item.
 */
export type QueryRead<T extends object> = {
  method?: "read";
  multiple?: false;
  /**
   * Common item properties to use for identifying the context in which to get the item.
   */
  context?: Context<T>;
  /**
   * Offset of the first matching item.
   */
  offset?: number;
  limit?: never;
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
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
