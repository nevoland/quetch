import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for updating an item.
 */
export type QueryUpdate<T extends object> = {
  method: "update";
  multiple?: false;
  /**
   * Common item properties to use for identifying the context in which to update the item.
   */
  context?: Context<T>;
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
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
