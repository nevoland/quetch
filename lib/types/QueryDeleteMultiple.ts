import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for deleting multiple items.
 */
export type QueryDeleteMultiple<T extends object> = {
  method: "delete";
  multiple: true;
  /**
   * Common item properties to use for identifying the context in which to delete the item.
   */
  context?: Context<T>;
  filter?: Filter<T>;
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
