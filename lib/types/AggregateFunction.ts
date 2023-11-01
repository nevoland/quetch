/**
 * Aggregation function.
 */
export type AggregateFunction<T extends object> =
  | "length"
  | { operator: "length" }
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
