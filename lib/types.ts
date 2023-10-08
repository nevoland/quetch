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

export interface Order {
  key: string;
  descending: boolean;
}

export interface UnaryFilter {
  operator: string;
  value:
    | string
    | number
    | RegExp
    | Date
    | Filter
    | (string | number | RegExp | Date | Filter)[];
}

export interface BinaryFilter extends UnaryFilter {
  key: string;
}

export type Filter = UnaryFilter | BinaryFilter;

export interface BaseQuery {
  type: string | {}[];
  method: string;
  context?: {
    [key: string]: string | number | undefined;
  };
  fields?: string[];
  relatedFields?: { [name: string]: Query };
}

export interface MutationQuery extends BaseQuery {
  value?: {};
}

export interface ListQuery extends BaseQuery {
  method: "list";
  filter?: Filter;
  order?: Order[];
  limit?: number;
  offset?: number;
}

export type Query = BaseQuery | MutationQuery | ListQuery;

export interface ConcurrentQuery {
  queries: { [name: string]: Query } | Query[];
}

export type Result = string | number | {} | (string | number | {})[];

export type Fetcher<Q = Query, R = Result> = (query: Q) => Promise<R>;

export type Handler<Q extends Query, R> =
  | ((next: Fetcher<NQ, NR>) => Fetcher<Q, R>)
  | (() => Fetcher<Q, R>);
