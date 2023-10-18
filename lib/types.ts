export type Any =
  | boolean
  | string
  | number
  | object
  | symbol
  | null
  | undefined
  | Array<any>
  | ((...args: any[]) => any);

export type AbortableRequest = Request & { signal?: AbortSignal };

export type Handler<I, O, NI, No> = (
  input: I,
  next: NextHandler<NI, No>,
) => Promise<O>;

export type NextHandler<I, R> = (input: I) => Promise<R>;

export type Query<T extends object> =
  | QueryGet<T>
  | QueryGetMultiple<T>
  | QueryCreate<T>
  | QueryCreateMultiple<T>
  | QueryUpdate<T>
  | QueryUpdateMultiple<T>
  | QueryDelete<T>
  | QueryDeleteMultiple<T>
  | QueryAggregate<T>;

export type QueryBase<T extends object> = {
  type: string | T[];
  context?: {
    [key: string]: string | number | undefined;
  };
  fields?: (keyof T)[];
  signal?: AbortSignal;
};

export type QueryMethod = Query<never>["method"];

export type QueryGet<T extends object> = QueryBase<T> & {
  method?: "get";
  filter?: Filter<T>;
  customFields?: CustomFieldMap<T>;
  orderBy?: Order<T>[];
  groupBy?: never;
};

export type QueryGetMultiple<T extends object> = QueryBase<T> & {
  method?: "get";
  multiple: true;
  filter?: Filter<T>;
  customFields?: CustomFieldMap<T>;
  orderBy?: Order<T>[];
  groupBy?: Group<T>[];
};

export type QueryCreate<T extends object> = QueryBase<T> & {
  method: "create";
  value: Partial<T>;
};

export type QueryCreateMultiple<T extends object> = QueryBase<T> & {
  method: "create";
  multiple: true;
  value: Partial<T>[];
};

export type QueryUpdate<T extends object> = QueryBase<T> & {
  method: "update";
  value: Partial<T>;
};

export type QueryUpdateMultiple<T extends object> = QueryBase<T> & {
  method: "update";
  multiple: true;
  value: Partial<T>[];
  filter?: Filter<T>;
};

export type QueryDelete<T extends object> = QueryBase<T> & {
  method: "delete";
  filter?: Filter<T>;
};

export type QueryDeleteMultiple<T extends object> = QueryBase<T> & {
  method: "delete";
  multiple: true;
  filter?: Filter<T>;
};

export type QueryAggregate<T extends object> = QueryBase<T> & {
  method: "aggregate";
  aggregator: AggregateFunction<T>;
  filter?: Filter<T>;
};

export type Order<T extends object> = {
  key: keyof T;
  descending: boolean;
};

type FilterKeys<T extends object, P> = {
  [K in keyof T]-?: T[K] extends P ? K : never;
}[keyof T];

export type FieldFunction<T extends object> = {
  operator: "formatDate";
  field: FilterKeys<T, string | number>;
  format: string;
};

export type FieldFunctionOperator = FieldFunction<never>["operator"];

export type FieldFunctionReturn = {
  formatDate: string;
};

export type CustomFieldMap<T extends object> = Record<string, FieldFunction<T>>;

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

export type AggregateFunctionOperator = Exclude<
  AggregateFunction<{}>,
  string
>["operator"];

type CustomFieldAggregateMap<T extends object> = Record<
  string,
  AggregateFunction<T>
>;

type Group<T extends object> =
  | keyof T
  | {
      field: keyof T;
      customFields?: CustomFieldAggregateMap<T>;
    };

export type Filter<T extends object> =
  | FilterBoolean<T>
  | FilterString<T>
  | FilterNumber<T>
  | FilterStringContains<T>;

export type FilterOperator = Filter<{}>["operator"];

export type FilterBoolean<T extends object> = {
  operator: "all" | "any" | "none";
  children?: Filter<T>[];
};

export type FilterString<T extends object> = {
  operator: "equal" | "notEqual";
  field: keyof T;
  value: string;
};

export type FilterStringMatch<T extends object> = {
  operator: "match";
  field: keyof T;
  value: string;
  options: {
    ignoreCase?: boolean;
    global?: boolean;
    dotAll?: boolean;
  };
};

export type FilterStringContains<T extends object> = {
  operator: "contains";
  field: keyof T;
  value: string[];
};

export type FilterNumber<T extends object> = {
  operator:
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: keyof T;
  value: number;
};
