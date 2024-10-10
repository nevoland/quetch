import type { Filter } from "./Filter";

/**
 * Aggregation function.
 */
export type AggregateFunction<T extends object> =
  | "length"
  | { operator: "length" }
  | "index"
  | { operator: "index"; filter?: Filter<T> }
  | {
      operator:
        | "median"
        | "standardDeviation"
        | "mean"
        | "minimum"
        | "maximum"
        | "variance"
        | "mode";
      field: keyof T;
    };
