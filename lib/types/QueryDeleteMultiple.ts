import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for deleting multiple items.
 */
export type QueryDeleteMultiple<T> = {
  method: "delete";
  multiple: true;
  /**
   * Common item properties to use for identifying the context in which to delete the item.
   */
  context?: Context<T>;
  /**
   * Filter for finding the items to delete.
   */
  filter?: Filter<T>;
  /**
   * Offset of the first matching item to delete.
   */
  offset?: number;
  /**
   * Upper bound of the number of items to delete.
   */
  limit?: number;
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
