import type { AggregateFunction } from "./AggregateFunction";

export type AggregateFunctionOperator = Exclude<
  AggregateFunction<{}>,
  string
>["operator"];
