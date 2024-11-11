import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Order } from "./Order";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for updating multiple items.
 */
export type QueryUpdateMultiple<T extends object> = {
  method: "update";
  multiple: true;
  /**
   * Common item properties to use for identifying the context in which to update the item.
   */
  context?: Context<T>;
  /**
   * Partial property values to update.
   */
  value: readonly Partial<T>[];
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
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
