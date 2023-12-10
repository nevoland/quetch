import { type Filter, defineCustomFetch } from "../../lib/main.js";

type EntityMap = {
  device: {
    name: string;
  };
  user: {
    fullName: string;
    userName: string;
    creationDate: string;
    age: number;
  };
};

const customFetch = defineCustomFetch<EntityMap>(null as any);

const data = await customFetch({
  aggregator: "length",
  filter: {
    field: "name",
    operator: "exist",
  },
  method: "aggregate",
  type: "device",
});

const filter: Filter<EntityMap["user"]> = {
  field: "fullName",
  operator: "lowerThan",
  value: "23",
};

const user = await customFetch({
  customFields: {
    bingo: {
      field: "age",
      format: "YYYY",
      operator: "formatDate",
    },
    isOld: {
      operator: "custom",
      value(item) {
        return item.age > 60;
      },
    },
  },
  fields: ["age", "isOld", "bingo"],
  filter,
  method: "read",
  multiple: true,
  type: "user",
});

user;

type A = { a: string; b: boolean };
type B = { c: number };
type AandB = A & B;

const filterA: Filter<A> = {
  field: "a",
  operator: "equal",
  value: "bingo",
};

const filterAandB: Filter<AandB> = filterA;

type AKeys = keyof A;
type BKeys = keyof B;
type AandBKeys = keyof AandB;

type GetAItem<K extends AKeys> = A[K];
type GetBItem<K extends AKeys> = B[K];
type AandBItem<K extends AKeys> = AandB[K];
