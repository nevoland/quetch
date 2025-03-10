import {
  combine,
  cork,
  defineCheckQuery,
  defineCustomFetch,
  fetchExternal,
  identity,
  log,
} from "../../lib/main";
import type { Handler } from "../../lib/types";

const customFetch: Handler<Request, Response, never, never> = combine(
  log("test"),
  (input, next) => next(input),
  // (input, next) => {},
  identity,
  identity,
  identity,
  identity,
  fetchExternal(),
  // async (query: string, fetcher: typeof fetch) => fetcher(query),
);

declare const middleware: Handler<{}, {}, Request, Response>;

const customFetch2: Handler<{}, {}, never, never> = combine(
  log("test"),
  middleware,
  identity,
  // middleware,
  fetchExternal(),
  // async (query: string, fetcher: typeof fetch) => fetcher(query),
);

const result = await customFetch(new Request("https://localhost/"), cork);

type EntityTest = {
  a: number;
  b: string;
  c: boolean;
};

type EntityTest2 = {
  c: boolean;
  d: object;
  e: string;
};

type Entities = {
  test: EntityTest;
  test2: EntityTest2;
};

const customFetchTyped = defineCustomFetch<Entities>(async () => {});
const checkQuery = defineCheckQuery<Entities>();

const typedResult = await customFetchTyped({
  type: "test",
});
typedResult.a;

const typedResultA = await customFetchTyped({
  type: "test",
  // multiple: true,
  fields: ["a", "date"],
  customFields: {
    date: {
      operator: "formatDate",
      field: "a",
      format: "YYYY-MM",
    },
  },
  filter: {
    field: "date",
    operator: "equal",
    value: "test",
  },
  // Not possible with { multiple: false }
  // group: ["date"],
});
typedResultA.a;

const typedResultB = await customFetchTyped({
  type: "test",
  method: "aggregate",
  aggregator: "length",
});
typedResultB + 2;

const typedResultC = await customFetchTyped({
  type: "test2",
  method: "get",
  multiple: true,
  fields: ["c", "customFieldA"],
  customFields: {
    customFieldA: {
      operator: "formatDate",
      field: "e",
      format: "YYYY-MM",
    },
  },
  filter: {
    operator: "equal",
    field: "customFieldA",
    value: "2023-03",
  },
  order: [
    "d",
    {
      field: "c",
    },
  ],
  group: ["e", { field: "customFieldA" }],
  // order: ["c"],
});
typedResultC[0].c;
typedResultC[0].customFieldA;

const typedResultD = await customFetchTyped({
  type: [
    { id: "0001", a: 32, b: true, c: "hello" },
    // { id: "0002", a: 3232, b: true, c: "hello" },
  ],
  method: "get",
  fields: ["a", "b"],
  multiple: true,
  customFields: {
    customFieldA: {
      operator: "custom",
      value: (item) => `ID: ${item.id}`,
    },
  },
  filter: {
    operator: "all",
    value: [
      {
        operator: "equal",
        field: "a",
        value: 32,
      },
      {
        operator: "equal",
        field: "customFieldA",
        value: "bingo",
      },
    ],
  },
  // order: [
  //   {
  //     field: "sdfsdfsdf",
  //   },
  // ],
  // group: [{ field: "dfsdsdf" }],
});
typedResultD[0].b;

const typedResultE = await customFetchTyped({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "aggregate",
  aggregator: "length",
});
typedResultE + 2;

const typedResultF = await customFetchTyped({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  fields: ["a", "customA", "customB"],
  // multiple: true,
  customFields: {
    customA: {
      operator: "formatDate",
      field: "a",
      format: "YYYY",
    },
    customB: {
      operator: "custom",
      value: (item) => item.a * 2,
    },
  },
  filter: {
    operator: "equal",
    field: "a",
    value: 32,
  },
});
typedResultF.customA;
typedResultF.customB;

const typedResultG = await customFetchTyped({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  multiple: true,
  fields: ["a"],
  group: [
    {
      field: "c",
      customFields: {
        count: "length",
      },
    },
  ],
  // customFields: {
  //   customA: {
  //     operator: "formatDate",
  //     field: "c",
  //     format: "YYYY",
  //   },
  //   customB: {
  //     operator: "custom",
  //     value: (item) => item.a * 2,
  //   },
  // },
});
typedResultG[0].a;
// typedResultG[0].customB;

const fieldsH = ["a", "customA"] as const;
const context = { id: "00001" };
const typedResultH = await customFetchTyped({
  type: [{ id: "00001", a: 32, b: true, c: "hello" }],
  method: "get",
  context,
  multiple: true,
  fields: fieldsH,
  group: [
    {
      field: "c",
      customFields: {
        count: "length",
      },
    },
  ],
  order: ["b"],
  customFields: {
    customA: {
      operator: "formatDate",
      field: "c",
      format: "YYYY",
    },
  },
});
typedResultH[0].a;

const data = [{ id: "00001", a: 32, b: true, c: "hello" }];
const customFieldsI = {
  customA: {
    operator: "formatDate",
    field: "c",
    format: "YYYY",
  },
} as const;
const query = checkQuery({
  type: data,
  method: "get",
  context,
  multiple: true,
  fields: fieldsH,
  group: [
    {
      field: "c",
      customFields: {
        count: "length",
      },
    },
  ],
  customFields: customFieldsI,
});
const typedResultI = await customFetchTyped(query);
typedResultI[0].a;
