import type { Field } from "./Field";
import type { Filter } from "./Filter";

/**
 * Aggregation function.
 */
export type AggregateFunction<T> =
  | "length"
  | { operator: "length" }
  | { operator: "index"; filter?: Filter<T>; last?: boolean }
  | {
      operator:
        | "median"
        | "standardDeviation"
        | "mean"
        | "minimum"
        | "maximum"
        | "variance"
        | "mode";
      field: Field<T>;
    };
