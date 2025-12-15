import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for deleting an item.
 */
export type QueryDelete<T> = {
  method: "delete";
  multiple?: false;
  /**
   * Common item properties to use for identifying the context in which to delete the item.
   */
  context?: Context<T>;
  /**
   * Filter for finding the item, if it cannot be found based on the `context`.
   */
  filter?: Filter<T>;
  /**
   * Offset of the first matching item to delete.
   */
  offset?: number;
  limit?: never;
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
