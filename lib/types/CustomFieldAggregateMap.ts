import type { AggregateFunction } from "./AggregateFunction";

export type CustomFieldAggregateMap<T extends object> = Record<
  string,
  AggregateFunction<T>
>;
