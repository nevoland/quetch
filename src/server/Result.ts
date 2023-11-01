import type { CustomFieldMap } from "../../lib/types/CustomFieldMap";
import type { FieldFunctionCustom } from "../../lib/types/FieldFunctionCustom";
import type { FieldFunctionReturn } from "../../lib/types/FieldFunctionReturn";
import type { Filter } from "../../lib/types/Filter";
import type { Group } from "../../lib/types/Group";
import type { InjectCustomFields } from "../../lib/types/InjectCustomFields";
import type { Item } from "../../lib/types/Item";
import type { Order } from "../../lib/types/Order";
import type { QueryAggregate } from "../../lib/types/QueryAggregate";
import type { QueryRead } from "../../lib/types/QueryRead";

type Query2<T extends object, C extends CustomFieldMap<T> | undefined> =
  | Query2Read<T, C>
  | Query2Aggregate<T>;

type Query2Read<T extends object, C extends CustomFieldMap<T> | undefined> =
  | {
      method?: "read";
      multiple?: false;
      filter?: Filter<InjectCustomFields<T, C>>;
      order?: Order<InjectCustomFields<T, C>>;
      customFields?: CustomFieldMap<T>;
      fields?: (keyof T | keyof C)[];
    }
  | {
      method?: "read";
      multiple: true;
      filter?: Filter<InjectCustomFields<T, C>>;
      customFields?: CustomFieldMap<T>;
      fields?: (keyof T | keyof C)[];
      order?: Order<InjectCustomFields<T, C>>;
      group?: Group<InjectCustomFields<T, C>>;
    };

type Query2Aggregate<T extends object> = {
  method: "aggregate";
} & (
  | {
      function: "length";
    }
  | {
      function: "custom";
      value: (item: T) => any;
    }
);

type Entity2<
  T extends object,
  C extends CustomFieldMap<T>,
  F extends (keyof T | keyof C) | undefined,
> = [F] extends [keyof T | keyof C]
  ? {
      readonly [K in F]: K extends keyof T
        ? T[K]
        : K extends keyof C
        ? C[K] extends FieldFunctionCustom<T>
          ? ReturnType<C[K]["value"]>
          : C[K]["operator"] extends keyof FieldFunctionReturn
          ? FieldFunctionReturn[C[K]["operator"]]
          : never
        : never;
    }
  : T;

type ResultB<
  T extends object,
  Q extends Query2<T, C>,
  C extends CustomFieldMap<T> | undefined,
  // F extends (keyof T | keyof C)[] | undefined = Q["fields"],
> = Q extends QueryRead<T, C>
  ? Item<Q["fields"]> extends keyof T | keyof C
    ? C extends CustomFieldMap<T>
      ? Entity2<T, C, Item<Q["fields"]>>
      : Entity2<T, never, Item<Q["fields"]>>
    : C extends CustomFieldMap<T>
    ? Entity2<T, C, keyof T | keyof C>
    : T
  : Q extends QueryAggregate<T, C>
  ? number
  : never;

type ResultC<
  T extends object,
  C extends CustomFieldMap<T> | undefined,
  F extends (keyof T | keyof C) | undefined,
> = [C] extends [CustomFieldMap<T>] ? Entity2<T, C, F> : Entity2<T, never, F>;

type OveralResultB<
  T extends object,
  Q extends Query2<T, C>,
  C extends CustomFieldMap<T> | undefined = Q extends {
    customFields: CustomFieldMap<T>;
  }
    ? Q["customFields"]
    : undefined,
  // F extends (keyof T | keyof C)[] | undefined = Q["fields"],
> = Q extends { multiple: true } ? ResultB<T, Q, C>[] : ResultB<T, Q, C>;

type IsAny<T> = [0] extends [1 & T] ? true : false;
type IsNever<T> = [never, T] extends [T, never] ? true : false;

type check = IsNever<any>;

type IsUnknown<T> = IsAny<T> extends true
  ? false
  : [unknown] extends [T]
  ? true
  : false;

type ENTITY = { a: number; b: string; c: boolean };
type QUERY = {
  type: ENTITY;
  method: "read";
  fields: ["a", "d"];
  customFields: {
    d: {
      operator: "custom";
      value: (item: ENTITY) => [string, number];
    };
  };
};

type checkResultB = OveralResultB<
  ENTITY,
  {
    method: "read";
    fields: ["a", "f"];
    // multiple: true;
    customFields: {
      f: {
        operator: "formatDate";
        field: "a";
        format: "YYYY";
      };
      d: {
        operator: "custom";
        value: (item: ENTITY) => [string, number];
      };
    };
  }
>;

function getData<
  Q extends Query2<T, C>,
  T extends object,
  C extends CustomFieldMap<T> | undefined = Q extends {
    customFields: CustomFieldMap<T>;
  }
    ? Q["customFields"]
    : undefined,
>(query: Q, data: T[]): OveralResultB<T, Q, C> {
  return [query, data] as unknown as OveralResultB<T, Q, C>;
}

const data = getData(
  {
    fields: ["a", "b", "d"],
    method: "read",
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
          return item;
        },
      },
    },
  },
  [
    { a: 1, b: 2 },
    { a: 2, b: 22 },
  ],
);

data.d;

type checkResultBItem = Item<checkResultB>;

type checkResultB2 = OveralResultB<
  ENTITY,
  {
    method: "aggregate";
    function: "length";
  }
>;
