import type { CustomFieldMap } from "../../lib/types/CustomFieldMap";
import type { InjectCustomFields } from "../../lib/types/InjectCustomFields";
import type { Item } from "../../lib/types/Item";
import type { Pick } from "../../lib/types/Result";

type NotZero<T extends number> = T extends 0 ? never : number;

function safeDiv<T extends number, U extends NotZero<P>, P extends number = U>(
  a: T,
  b: U,
): number {
  return a / b;
}
safeDiv(5, 1);

type Filter<T extends object> = {
  field: keyof T;
  operator: "equal";
  value: any;
};

type Query<T extends object> = {
  method: "read";
  fields?: (keyof T)[];
  filter?: Filter<T>;
};

type Request<T extends object, C extends CustomFieldMap<T>> = Query<
  InjectCustomFields<T, C>
>;

type IsNever<T> = [never, T] extends [T, never] ? true : false;

function customFetch<
  T extends object,
  const R extends Request<T, C>,
  const C extends CustomFieldMap<T>,
>(
  type: T[],
  input: R & { customFields?: C },
): Pick<InjectCustomFields<T, C>, Item<R["fields"]> & string> {
  return { type, input } as any;
}

export const result = customFetch([{ a: 1, b: "2", c: true }], {
  method: "read",
  fields: ["b", "d", "e"],
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

result.d;
