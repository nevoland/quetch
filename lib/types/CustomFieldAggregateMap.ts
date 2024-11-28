import type { AggregateFunction } from "./AggregateFunction";

export type CustomFieldAggregateMap<T> = Record<string, AggregateFunction<T>>;
