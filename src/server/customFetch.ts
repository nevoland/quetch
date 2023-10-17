import { combine, fetchRequest, identity, impasse, log } from "../../lib/main";
import type { Handler, Query, QueryMethod } from "../../lib/types";

const customFetch: Handler<Request, Response, never, never> = combine(
  log("test"),
  // (input, next) => next(input),
  // (input, next) => {},
  identity,
  identity,
  identity,
  identity,
  fetchRequest(),
  // async (query: string, fetcher: typeof fetch) => fetcher(query),
);

declare const middleware: Handler<{}, {}, Request, Response>;

const customFetch2: Handler<{}, {}, never, never> = combine(
  log("test"),
  middleware,
  identity,
  // middleware,
  fetchRequest(),
  // async (query: string, fetcher: typeof fetch) => fetcher(query),
);

const result = await customFetch(
  new Request("https://www.apple.com/"),
  impasse,
);

type EntityTest = {
  a: number;
  b: string;
};

type EntityTest2 = {
  c: boolean;
  d: object;
};

type Entities = {
  test: EntityTest;
  test2: EntityTest2;
};

type ItemType<T, S> = T extends Array<infer I> ? I : S;

declare function quetch6<
  T extends keyof Entities,
  E extends Entities[T],
  Q extends Query<E>,
>(
  query: Q & { type: T },
): Promise<
  Q["method"] extends "get"
    ? Q extends { multiple: true }
      ? { readonly [K in ItemType<Q["fields"], keyof E>]: E[K] }[]
      : { readonly [K in ItemType<Q["fields"], keyof E>]: E[K] }
    : never
>;
declare function quetch6<E extends object, Q extends Query<E>>(
  query: Q & { type: E[] },
): Promise<
  Q["method"] extends "get"
    ? Q extends { multiple: true }
      ? { readonly [K in ItemType<Q["fields"], keyof E>]: E[K] }[]
      : { readonly [K in ItemType<Q["fields"], keyof E>]: E[K] }
    : Q["method"] extends "aggregate"
    ? number
    : never
>;

const result6 = await quetch6({
  type: "test2",
  method: "get",
  // multiple: true,
  fields: ["c"],
});
result6.c;

const result6B = await quetch6({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  multiple: true,
  fields: ["a"],
});
result6B[0].a;

const result6C = await quetch6({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "aggregate",
  aggregator: "length",
});

const result6D = await quetch6({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  fields: ["a"],
  multiple: true,
  customFields: {
    customA: {
      operator: "formatDate",
      field: "a",
      format: "YYYY",
    },
  },
});

const result6E = await quetch6({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  multiple: true,
  fields: [],
  groupBy: [
    {
      field: "c",
      customFields: {
        count: "length",
      },
    },
  ],
  customFields: {
    customA: {
      operator: "formatDate",
      field: "a",
      format: "YYYY",
    },
  },
});
