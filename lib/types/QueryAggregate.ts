import type { AggregateFunction } from "./AggregateFunction";
import type { Filter } from "./Filter";

/**
 * Query for computing an aggregated value.
 */
export type QueryAggregate<T extends object> = {
  method: "aggregate";
  aggregator: AggregateFunction<T>;
  filter?: Filter<T>;
};
