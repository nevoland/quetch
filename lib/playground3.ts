type Method = "get" | "find" | "list" | "count" | "post" | "put" | "delete";

interface EntityTest {
  a: number;
  b: string;
}

interface EntityTest2 {
  c: boolean;
  d: object;
}

type MethodTest = "simulate";

interface Entities {
  test: EntityTest;
  test2: EntityTest2;
}

interface Methods {
  test: Method | MethodTest;
  test2: Method;
}

interface QuerySingleRemote<
  T extends keyof Entities & keyof Methods,
  F extends keyof Entities[T],
> {
  type: T;
  method?: Exclude<Methods[T], "list">;
  context?: {
    [key: string]: string | number | boolean | null | undefined;
  };
  fields?: F[];
  relatedFields?: { [field: string]: Query };
}

interface QueryCountRemote<T extends keyof Entities & keyof Methods>
  extends Omit<QuerySingleRemote<T>, "method"> {
  method: "count";
}

interface QueryMultipleRemote<T extends keyof Entities & keyof Methods>
  extends Omit<QuerySingleRemote<T>, "method"> {
  method: "list";
  limit?: number;
}

type Unpacked<T> = T extends (infer U)[] ? U : T;

type ValueSingleRemote<
  T extends keyof Entities & keyof Methods,
  F extends keyof Entities[T],
  Q extends QuerySingleRemote<T, F>,
> = Q["fields"] extends undefined
  ? Entities[T]
  : Q["fields"] extends (keyof Entities[T])[]
  ? { [K in Exclude<Unpacked<Q["fields"]>, unknown>]: Entities[T][K] }
  : Entities[T];

type ValueMultipleRemote<
  T extends keyof Entities & keyof Methods,
  Q extends QueryMultipleRemote<T>,
> = Q["fields"] extends undefined
  ? Entities[T][]
  : Unpacked<Q["fields"]> extends unknown
  ? Entities[T][]
  : Unpacked<Q["fields"]> extends keyof Entities[T]
  ? { [K in Exclude<Unpacked<Q["fields"]>, unknown>]: Entities[T][K] }[]
  : Entities[T][];

interface QueryLocal<value extends {} = {}> {
  type: value[];
  method?: string;
  context?: {
    [key: string]: string | number | undefined;
  };
  fields: keyof value;
  relatedFields?: { [name: string]: Query };
}

interface QueryCollection {
  queries: { [key: string]: Query } | Query[];
}

type Query =
  | QuerySingleRemote<"test">
  | QueryCountRemote<"test">
  | QueryMultipleRemote<"test">
  | QuerySingleRemote<"test2">
  | QueryCountRemote<"test2">
  | QueryMultipleRemote<"test2">;

interface Request {
  <Q extends QuerySingleRemote<"test"> = QuerySingleRemote<"test">>(
    query: Q,
  ): Promise<ValueSingleRemote<"test", Q>>;
  <Q extends QueryMultipleRemote<"test"> = QueryMultipleRemote<"test">>(
    query: Q,
  ): Promise<ValueMultipleRemote<"test", Q>>;
  <Q extends QuerySingleRemote<"test2"> = QuerySingleRemote<"test2">>(
    query: Q,
  ): Promise<ValueSingleRemote<"test2", Q>>;
  <Q extends QueryMultipleRemote<"test2"> = QueryMultipleRemote<"test2">>(
    query: Q,
  ): Promise<ValueMultipleRemote<"test2", Q>>;
}

declare const request: Request;

declare function quetch<
  T extends keyof Entities,
  F extends keyof Entities[T],
  M extends Methods[T] = "get",
>(query: {
  readonly type: T;
  readonly fields?: readonly F[];
  readonly method?: M;
}): Promise<
  M extends "list"
    ? { readonly [K in F]: Entities[T][K] }[]
    : M extends "count"
    ? number
    : { readonly [K in F]: Entities[T][K] }
>;

type Narrowable =
  | string
  | number
  | boolean
  | symbol
  | object
  | undefined
  | void
  | null
  | {};
declare function foo<
  N extends Narrowable,
  T extends { [k: string]: N | T | [] },
>(x: T): T;

declare function request3<
  T extends keyof Entities,
  F extends keyof Entities[T],
>(query: { type: T; fields?: F[] }): Promise<{ [K in F]: Entities[T][K] }>;

function q<T extends keyof Entities, F extends keyof Entities[T]>(query: {
  type: T;
  fields?: F[];
}): typeof query {
  return query;
}

type Request2 = typeof quetch;

type Query3<
  T extends keyof Entities,
  F extends keyof Entities[T] = keyof Entities[T],
> = {
  type: T;
  fields?: F[];
};

type Query4 = Parameters<Request2>[0];

interface Query5<T extends keyof Entities, F extends keyof Entities[T]> {
  type: T;
  fields?: F[];
}

// // eslint-disable-next-line
function print(what: Narrowable) {
  return what;
}

async function run(): Promise<void> {
  const query = q({ type: "test", fields: ["a", "b"] });
  const value = await quetch(query);
  print(value.a);
  print(value.b);
  print(value.c);

  const query2 = { type: "test2", fields: ["c"] } as const;
  const value2 = await quetch(query2);
  print(value2.b);
  print(value2.c);
  print(value2.d);

  const value3 = await quetch({ type: "test", fields: ["a", "c"] });
  print(value3.a);
  print(value3.b);
  print(value3.c);

  const values = await quetch({ type: "test", method: "list", fields: ["a"] });
  const item = values[0];
  print(item.a);
  print(item.b);
  print(item.c);
  print(item.d);

  const number = await quetch({
    type: "test",
    method: "count",
    fields: ["a"],
  });
  print(number);
}

run();

function functionGenerator<T extends string, U = { [K in T]?: string }>(
  keys: T[],
): (p: U) => U {
  return (p: U) => p;
}

const testFun = functionGenerator(["one", "two"]);

const testResult = testFun({ one: "1" });
testResult.one;
testFun({ two: "2" });
testFun({ three: "3" });

export type Result<U, T extends string> = U extends { fields: T[] }
  ? { [K in T]: string | number }
  : never;
// : Q extends { relatedFields: infer V }
// ? { [K in keyof V]: string | number }
// : Q extends { fields: T[]; relatedFields: infer V }
// ? { [K in T]?: string | number } & { [K in keyof V]: string | number }
// : { [name: string]: string | number }

export function request_old(query: Query): Promise<Result<Query, string>> {
  const result: Result<Query, string> = {};
  if ("fields" in query && query.fields != null) {
    for (const name of query.fields) {
      result[name] = 1;
    }
  }
  return Promise.resolve(result);
}

async function main() {
  const result = await request_old({
    type: "entity",
    fields: ["a", "b"],
  });
  result.c;
}

const query = {
  type: "user",
  method: "list",
  fields: ["id", "name", "email"],
  relatedFields: {
    rights: {
      type: "right",
      method: "list",
      fields: ["id", "value"],
    },
  },
};

const query = {
  queries: {
    id: {},
    name: {},
    email: {},
  },
};

const api = {
  user: {
    get: {
      query: (query) => ({ url: `/user/${query.value.id}` }),
      result: (result) => result.body,
      error: (error) => error,
    },
    get: (next) => (query) =>
      next({
        url: `/user/${query.value.id}`,
      }).then(
        (result) => result.body,
        (error) => error,
      ),
  },
  rights: {},
};

// const request = compose(
//   concurrent(),
//   relative(),
//   route(api),
//   aggregate(),
//   cors(),
//   credentials(),
//   cache(),
//   json(),
//   fetch(),
// )()
