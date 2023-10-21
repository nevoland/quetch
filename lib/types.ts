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

// TODO: Move to other library
export type Store<T = any> = {
  has(key: string): Promise<boolean>;
  get(key: string): Promise<T>;
  set(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
};

/**
 * Handles an `input` query and returns an `output` promise, eventually using the `next` handler.
 */
export type Handler<I, O, NI, No> = (
  input: I,
  next: NextHandler<NI, No>,
) => Promise<O>;

/**
 * Handles an `input` query and returns an `output` promise.
 */
export type NextHandler<I, R> = (input: I) => Promise<R>;

/**
 * Returns the inferred item type of an array, or an alternative type if it is something else (e.g., `undefined`).
 */
type ArrayItem<T, S> = T extends Array<infer I>
  ? I
  : T extends ReadonlyArray<infer I>
  ? I
  : S;

/**
 * Entity type for a given query.
 */
export type EntityItem<
  E extends object,
  C extends CustomFieldMap<E>,
  Q extends Query<E, C>,
> = Q extends {
  customFields: CustomFieldMap<E>;
}
  ? {
      readonly [K in ArrayItem<
        Q["fields"],
        keyof E | keyof Q["customFields"]
      >]: K extends keyof E
        ? E[K]
        : K extends keyof Q["customFields"]
        ? Q["customFields"][K] extends FieldFunctionCustom<E>
          ? ReturnType<Q["customFields"][K]["value"]>
          : Q["customFields"][K]["operator"] extends keyof FieldFunctionReturn
          ? FieldFunctionReturn[Q["customFields"][K]["operator"]]
          : never
        : never;
    }
  : {
      readonly [K in ArrayItem<Q["fields"], keyof E>]: K extends keyof E
        ? E[K]
        : never;
    };

/**
 * Query that fetches or mutates an entity.
 */
export type Query<T extends object, C extends CustomFieldMap<T>> =
  | QueryGet<T, C>
  | QueryGetMultiple<T, C>
  | QueryCreate<T, C>
  | QueryCreateMultiple<T, C>
  | QueryUpdate<T, C>
  | QueryUpdateMultiple<T, C>
  | QueryDelete<T, C>
  | QueryDeleteMultiple<T, C>
  | QueryAggregate<T, C>;

export type AnyQuery = Query<any, any>;

export type AnyQueryExternal = Omit<Query<any, any>, "type"> & { type: string };

export type AnyQueryLocal = Omit<Query<any, any>, "type"> & { type: object[] };

export type QueryBase<T extends object, C extends CustomFieldMap<T>> = {
  type: string | T[];
  /**
   * Common item properties to use for identifying the item.
   *
   * @example
   * ```typescript
   * { context: { id: "000001" } }
   * { context: { organisation: "World Company" } }
   * ```
   */
  context?: {
    [K in keyof T]?: T[K];
  };
  /**
   * Item fields to pick. If omitted, all fields are picked.
   */
  fields?: readonly (keyof InjectCustomField<T, C>)[];
  /**
   * Abort signal to abort the request.
   */
  signal?: AbortSignal;
};

/**
 * Available query methods.
 */
export type QueryMethod = Exclude<Query<never, never>["method"], undefined>;

/**
 * Injects the custom fields into the entity type.
 */
type InjectCustomField<T extends object, C extends CustomFieldMap<T>> = {
  readonly [K in keyof T | keyof C]: K extends keyof T
    ? T[K]
    : K extends keyof C
    ? C[K] extends FieldFunctionCustom<T>
      ? ReturnType<C[K]["value"]>
      : C[K]["operator"] extends keyof FieldFunctionReturn
      ? FieldFunctionReturn[C[K]["operator"]]
      : never
    : never;
};

/**
 * Query for getting a single item.
 */
export type QueryGet<T extends object, C extends CustomFieldMap<T>> = QueryBase<
  T,
  C
> & {
  method?: "get";
  multiple?: false;
  /**
   * Filter for finding the item, if it cannot be found based on the `context`.
   */
  filter?: Filter<InjectCustomField<T, C>>;
  /**
   * Custom fields to add to each item, which can be used in the `filter`.
   */
  customFields?: C;
  offset?: never;
  orderBy?: never;
  groupBy?: never;
};

/**
 * Query for getting a list of items.
 */
export type QueryGetMultiple<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method?: "get";
  multiple: true;
  /**
   * Filter that picks the items.
   */
  filter?: Filter<InjectCustomField<T, C>>;
  /**
   * Custom fields to add to each item, which can be used in the `filter` and `groupBy`.
   */
  customFields?: C;
  /**
   * Order by which the items should be sorted.
   */
  orderBy?: Order<InjectCustomField<T, C>>[];
  /**
   * Groups items by specified fields.
   */
  groupBy?: Group<InjectCustomField<T, C>>[];
  /**
   * Offset of the first matching item.
   */
  offset?: number;
  /**
   * Upper bound of the number of items to return.
   */
  limit?: number;
};

/**
 * Query for creating an item.
 */
export type QueryCreate<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "create";
  value: Partial<T>;
};

/**
 * Query for creating multiple items.
 */
export type QueryCreateMultiple<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "create";
  multiple: true;
  value: Partial<T>[];
};

/**
 * Query for updating an item.
 */
export type QueryUpdate<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "update";
  value: Partial<T>;
  /**
   * Filter for finding the item, if it cannot be found based on the `context`.
   */
  filter?: Filter<InjectCustomField<T, C>>;
  offset?: never;
  orderBy: never;
  groupBy?: never;
};

/**
 * Query for updating multiple items.
 */
export type QueryUpdateMultiple<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "update";
  multiple: true;
  value: Partial<T>[];
  filter?: Filter<T>;
  /**
   * Order by which the items should be sorted.
   */
  orderBy?: Order<InjectCustomField<T, C>>[];
  /**
   * Offset of the first matching item to update.
   */
  offset?: number;
  /**
   * Sets the upper bound of the number of items to update.
   */
  limit?: number;
};

/**
 * Query for deleting an item.
 */
export type QueryDelete<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "delete";
  filter?: Filter<T>;
};

/**
 * Query for deleting multiple items.
 */
export type QueryDeleteMultiple<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "delete";
  multiple: true;
  filter?: Filter<T>;
};

/**
 * Query for computing an aggregated value.
 */
export type QueryAggregate<
  T extends object,
  C extends CustomFieldMap<T>,
> = QueryBase<T, C> & {
  method: "aggregate";
  aggregator: AggregateFunction<T>;
  filter?: Filter<T>;
};

/**
 * Order item.
 */
export type Order<T extends object> =
  | keyof T
  | {
      field: keyof T;
      descending?: boolean;
    };

type FilterKeys<T extends object, P> = {
  [K in keyof T]-?: T[K] extends P ? K : never;
}[keyof T];

export type FieldFunction<T extends object> =
  | FieldFunctionCustom<T>
  | FieldFunctionFormatDate<T>;

/**
 * Applies a custom field transform function.
 */
export type FieldFunctionCustom<T extends object> = {
  operator: "custom";
  value: (item: T) => any;
};

/**
 * Formats the date found in a given field, which can be an ISO string date or a timestamp.
 */
export type FieldFunctionFormatDate<T extends object> = {
  operator: "formatDate";
  field: FilterKeys<T, string | number>;
  format: string;
};

/**
 * Possible field function operators.
 */
export type FieldFunctionOperator = FieldFunction<never>["operator"];

/**
 * Return types of custom field functions.
 */
export interface FieldFunctionReturn {
  formatDate: string;
}

export type CustomFieldMap<T extends object> = Record<string, FieldFunction<T>>;

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

/**
 * Describes a predicate for filtering items.
 */
export type Filter<T extends object> =
  | FilterList<T>
  | FilterField<T>
  | FilterBoolean<T>
  | FilterString<T>
  | FilterStringInclude<T>
  | FilterNumber<T>
  | FilterArray<T>;

export type FilterOperator = Filter<never>["operator"];

/**
 * Joins a list of filters with a specific boolean operator.
 */
export type FilterList<T extends object> = {
  /**
   * Boolean operator to use for joining the filters.
   */
  operator: "all" | "any" | "none";
  /**
   * Filters to join.
   */
  value?: Filter<T>[];
};

/**
 * Checks if a given field exists.
 */
export type FilterField<T extends object> = {
  operator: "exist";
  field: keyof T;
};

/**
 * Checks if a given boolean field is `true` or `false`.
 */
export type FilterBoolean<T extends object> = {
  operator: "equal" | "notEqual";
  field: FilterKeys<T, boolean>;
  value: boolean;
};

/**
 * Checks if a given string field matches a given string value according to a given operator.
 */
export type FilterString<T extends object> = {
  operator:
    | "equal"
    | "notEqual"
    | "startWith"
    | "endWith"
    | "include"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: FilterKeys<T, string>;
  value: string;
};

/**
 * Checks if a given string field matches a given regular expression.
 */
export type FilterStringMatch<T extends object> = {
  operator: "match";
  field: FilterKeys<T, string>;
  /**
   * Raw regular expression string.
   */
  value: string;
  /**
   * Regular expression options.
   */
  options: {
    ignoreCase?: boolean;
    global?: boolean;
    dotAll?: boolean;
  };
};

/**
 * Checks if a given string field has any of the provided values.
 */
export type FilterStringInclude<T extends object> = {
  operator: "value";
  field: FilterKeys<T, string>;
  value: string[];
};

/**
 * Checks if a given number field matches a given number value according to a given operator.
 */
export type FilterNumber<T extends object> = {
  operator:
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lowerThan"
    | "lowerThanOrEqual";
  field: FilterKeys<T, number>;
  value: number;
};

/**
 * Checks if a given array field matches a given array value according to a given operator.
 */
export type FilterArray<T extends object, P = Any> = {
  operator: "equal" | "include" | "intersect";
  field: FilterKeys<T, P[]>;
  value: P[];
};
