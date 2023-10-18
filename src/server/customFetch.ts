import { combine, fetchRequest, identity, impasse, log } from "../../lib/main";
import type {
  CustomFieldMap,
  FieldFunctionReturn,
  Handler,
  Query,
  QueryMethod,
} from "../../lib/types";

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

type EntityItem<E extends object, Q extends Query<E>> = Q extends {
  customFields: CustomFieldMap<E>;
}
  ? {
      readonly [K in
        | ItemType<Q["fields"], keyof E>
        | keyof Q["customFields"]]: K extends keyof E
        ? E[K]
        : K extends keyof Q["customFields"]
        ? FieldFunctionReturn[Q["customFields"][K]["operator"]]
        : never;
    }
  : { readonly [K in ItemType<Q["fields"], keyof E>]: E[K] };

declare function quetch6<
  T extends keyof Entities,
  E extends Entities[T],
  Q extends Query<E>,
>(
  query: Q & { type: T },
): Promise<
  Q["method"] extends "get" | unknown
    ? Q extends { multiple: true }
      ? EntityItem<E, Q>[]
      : EntityItem<E, Q>
    : Q["method"] extends "aggregate"
    ? number
    : never
>;
declare function quetch6<E extends object, Q extends Query<E>>(
  query: Q & { type: E[] },
): Promise<
  Q["method"] extends "get" | unknown
    ? Q extends { multiple: true }
      ? EntityItem<E, Q>[]
      : EntityItem<E, Q>
    : Q["method"] extends "aggregate"
    ? number
    : never
>;

function builder<Entities extends Record<string, object>>() {
  function quetch6<
    T extends keyof Entities,
    E extends Entities[T],
    Q extends Query<E>,
  >(
    query: Q & { type: T },
  ): Promise<
    Q["method"] extends "get" | unknown
      ? Q extends { multiple: true }
        ? EntityItem<E, Q>[]
        : EntityItem<E, Q>
      : Q["method"] extends "aggregate"
      ? number
      : never
  > {
    return Promise.resolve(query);
  }
  return quetch6;
}

const quetch7 = builder<Entities>();

const result7 = await quetch7({
  type: "test",
});

const result6 = await quetch6({
  type: "test2",
  method: "get",
  // multiple: true,
  fields: ["c"],
  customFields: {
    customFieldA: {
      operator: "formatDate",
      field: "c",
      format: "YYYY-MM",
    },
  },
});
result6.c;

const result6B = await quetch6({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  multiple: true,
  fields: ["a", "b"],
});
result6B[0].b;

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
  fields: ["c"],
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
      field: "c",
      format: "YYYY",
    },
  },
});

result6E[0].customA;
