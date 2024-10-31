import type { CustomFieldMap } from "../../lib/types/CustomFieldMap";
import type { FieldFunctionCustom } from "../../lib/types/FieldFunctionCustom";
import type { FieldFunctionReturn } from "../../lib/types/FieldFunctionReturn";
import type { Item } from "../../lib/types/Item";
import type { QueryAggregate } from "../../lib/types/QueryAggregate";
import type { QueryRead } from "../../lib/types/QueryRead";

import type { Query } from "./QueryBase";

type ResultItem<
  T extends object,
  C extends CustomFieldMap<T>,
  F extends keyof T | keyof C,
> = {
  readonly [K in F]: K extends keyof T
    ? T[K]
    : K extends keyof C
      ? C[K] extends FieldFunctionCustom<T>
        ? ReturnType<C[K]["value"]>
        : C[K]["operator"] extends keyof FieldFunctionReturn
          ? FieldFunctionReturn[C[K]["operator"]]
          : "never1"
      : "never2";
};

type ResultQuery<
  T extends object,
  Q extends Query<T, C>,
  C extends CustomFieldMap<T> | undefined,
> = [Q] extends [QueryRead<T, C>]
  ? C extends CustomFieldMap<T>
    ? Item<Q["fields"]> extends keyof T | keyof C
      ? ResultItem<T, C, Item<Q["fields"]>>
      : ResultItem<T, C, keyof T | keyof C>
    : Item<Q["fields"]> extends keyof T
      ? ResultItem<T, never, Item<Q["fields"]>>
      : T
  : [Q] extends [QueryAggregate<T, C>]
    ? number
    : "never3";

export type Response<
  T extends object,
  Q extends Query<T, C>,
  C extends CustomFieldMap<T> | undefined = Q extends {
    customFields: CustomFieldMap<T>;
  }
    ? Q["customFields"]
    : undefined,
> = [Q] extends [{ multiple: true }]
  ? ResultQuery<T, Q, C>[]
  : ResultQuery<T, Q, C>;

function getData<
  T extends object,
  Q extends Query<T, C>,
  C extends CustomFieldMap<T> | undefined = [Q] extends [
    {
      customFields: CustomFieldMap<T>;
    },
  ]
    ? Q["customFields"]
    : undefined,
>(query: Q | { type: T[] }): Response<T, Q, C> {
  return query as unknown as Response<T, Q, C>;
}

const data = getData({
  type: [
    { a: 1, b: 2 },
    { a: 2, b: 22 },
  ],
  fields: ["a"],
  // method: "read",
  multiple: true,
  customFields: {
    c: {
      operator: "formatDate",
      field: "a",
      format: "yyy",
    },
    d: {
      operator: "custom",
      value(item) {
        return item.a * 3;
      },
    },
  },
});

data[0];
