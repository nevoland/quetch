import type { Context } from "./Context";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for creating an item.
 */
export type QueryCreate<T extends object> = {
  method: "create";
  multiple?: false;
  /**
   * Common item properties to use for identifying the context in which to create the item.
   */
  context?: Context<T>;
  /**
   * Value properties of the item to create.
   */
  value: Partial<T>;
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
