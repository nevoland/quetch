import { defineGenericFetch } from "../../lib/tools";
import { defineCustomFetch } from "../../lib/tools/defineCustomFetch";
import type { CustomFieldMap } from "../../lib/types/CustomFieldMap";
import type { Query } from "../../lib/types/Query";
import type { Result } from "../../lib/types/Result";

type NotZero<T extends number> = T extends 0 ? never : number;

function safeDiv<T extends number, U extends NotZero<P>, P extends number = U>(
  a: T,
  b: U,
): number {
  return a / b;
}
safeDiv(5, 1);

type IsNever<T> = [never, T] extends [T, never] ? true : false;

type M = {
  device: {
    id: string;
    name: string;
    state?: "pending" | "online" | "offline";
  };
  user: {
    id: string;
    email: string;
    fullName: string;
    creationDate: string;
  };
};

const genericFetch = defineGenericFetch<keyof M>(async (input) => input);

function someHook4<T extends object>() {
  return genericFetch<T>();
}

const device4B = await someHook4<M["user"]>()({
  type: "user",
  fields: ["email"],
});

const device4 = await genericFetch<M["device"]>()({
  type: [{ name: "hello", id: "333", state: "online" }],
  method: "read",
  fields: ["name", "a", "state"],
  customFields: {
    a: {
      operator: "custom",
      value(item) {
        return item.name;
      },
    },
  },
});

function customFetch3<T extends object>(): <Q extends Query<T, {}>>(
  query: Q & { customFields?: never },
) => Result<T, Q, {}>;
function customFetch3<T extends object>(): <
  Q extends Query<T, C>,
  C extends CustomFieldMap<T>,
>(
  query: Q & { customFields?: C },
) => Result<T, Q, C>;
function customFetch3<T extends object>(): <
  Q extends Query<T, C>,
  C extends CustomFieldMap<T>,
>(
  query: Q & { customFields?: C },
) => Result<T, Q, C> {
  return (() => {}) as any;
}

const device3 = customFetch3<M["device"]>()({
  method: "read",
  fields: ["id", "name"],
});

const customFetch2 = defineCustomFetch<M>(async (input) => input);

const device = await customFetch2({ type: "device" });
device.name;

async function getDevice(query: Parameters<typeof customFetch2>[1]) {
  return await customFetch2("device", query);
}

const deviceCount = await customFetch2({
  type: "device",
  method: "aggregate",
  aggregator: "length",
  filter: {
    operator: "include",
    field: "name",
    value: "a",
  },
});

const user = await customFetch2({
  type: "user",
  multiple: true,
  customFields: {
    creationYear: {
      operator: "formatDate",
      field: "creationDate",
      format: "YYYY",
    },
    isJunior: {
      operator: "custom",
      value(item) {
        return new Date(item.creationDate).valueOf() < 1000;
      },
    },
  },
  fields: ["email", "creationYear", "id", "isJunior"],
});
user[0].creationYear;

const DATA = [{ a: 1, b: "2", c: true }];

const result = await customFetch2({
  type: DATA,
  method: "read",
  fields: ["a", "d", "u"],
  multiple: true,
  customFields: {
    d: {
      operator: "custom",
      value(item) {
        return item.a * 2;
      },
    },
    e: {
      operator: "formatDate",
      field: "a",
      format: "YYYY",
    },
  },
});
result[0].a;

const resultB = await customFetch2({
  type: DATA,
  method: "read",
  fields: ["a", "d"],
  multiple: true,
  customFields: {
    d: {
      operator: "custom",
      value(item) {
        return item.a * 2;
      },
    },
    e: {
      operator: "formatDate",
      field: "a",
      format: "YYYY",
    },
  },
});
resultB[0].a;
resultB[0].b;
