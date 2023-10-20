import {
  combine,
  defineCheckQuery,
  defineCustomFetch,
  fetchRequest,
  identity,
  impasse,
  log,
} from "../../lib/main";
import type { FieldFunctionCustom, Handler } from "../../lib/types";

const customFetch: Handler<Request, Response, never, never> = combine(
  log("test"),
  (input, next) => next(input),
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

const result = await customFetch(new Request("https://localhost/"), impasse);

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
  // groupBy: ["date"],
});
typedResultA.a;

const typedResultB = await customFetchTyped({
  type: "test",
  method: "aggregate",
  aggregator: "length",
});

const typedResultC = await customFetchTyped({
  type: "test2",
  method: "get",
  // multiple: true,
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
});
typedResultC.c;
typedResultC.customFieldA;

const typedResultD = await customFetchTyped({
  type: [
    { a: 32, b: true, c: "hello" },
    { a: 3232, b: true, c: "hello" },
  ],
  method: "get",
  multiple: true,
  fields: ["a", "b"],
});
typedResultD[0].b;

const typedResultE = await customFetchTyped({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "aggregate",
  aggregator: "length",
});

const typedResultF = await customFetchTyped({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  fields: ["a", "customA"],
  multiple: true,
  customFields: {
    customA: {
      operator: "formatDate",
      field: "a",
      format: "YYYY",
    },
  },
});
typedResultF[0].customA;

const typedResultG = await customFetchTyped({
  type: [{ a: 32, b: true, c: "hello" }],
  method: "get",
  multiple: true,
  fields: ["a", "customA", "customB"],
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
    customB: {
      operator: "custom",
      value: (item) => item.a * 2,
    },
  },
});
typedResultG[0].customA;
typedResultG[0].customB;

const fieldsH = ["a", "customA"] as const;
const context = { id: "00001" };
const typedResultH = await customFetchTyped({
  type: [{ id: "00001", a: 32, b: true, c: "hello" }],
  method: "get",
  context,
  multiple: true,
  fields: fieldsH,
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
  groupBy: [
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
