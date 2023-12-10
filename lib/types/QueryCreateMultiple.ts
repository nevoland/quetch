import type { Context } from "./Context";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for creating multiple items.
 */
export type QueryCreateMultiple<T extends object> = {
  method: "create";
  multiple: true;
  /**
   * Common item properties to use for identifying the context in which to create the items.
   */
  context?: Context<T>;
  value: Partial<T>[];
  /**
   * Query parameters.
   */
  parameters?: Parameters;
  /**
   * Query settings.
   */
  settings?: QuerySettings<T>;
};
