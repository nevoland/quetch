import type { AggregateFunction } from "./AggregateFunction";
import type { Context } from "./Context";
import type { Filter } from "./Filter";
import type { Order } from "./Order";
import type { Parameters } from "./Parameters";
import type { QuerySettings } from "./QuerySettings";

/**
 * Query for computing an aggregated value.
 */
export type QueryAggregate<T extends object> = {
  method: "aggregate";
  /**
   * Common item properties to use for identifying the item.
   */
  context?: Context<T>;
  aggregator: AggregateFunction<T>;
  /**
   * Filter that picks the items.
   */
  filter?: Filter<T>;
  /**
   * Order by which the items should be sorted.
   */
  order?: Order<T>[];
  /**
   * Offset of the first matching item.
   */
  offset?: number;
  /**
   * Upper bound of the number of items to return.
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
