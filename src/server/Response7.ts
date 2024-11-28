// union to intersection converter by @jcalz

import { EMPTY_ARRAY } from "unchangeable";
import { SELF } from "../../lib/constants";
import type { Filter, FieldFiltered, CombineUnion } from "../../lib/types";

// Intersect<{ a: 1 } | { b: 2 }> = { a: 1 } & { b: 2 }
type Intersect<T> = (T extends any ? (x: T) => 0 : never) extends (
  x: infer R,
) => 0
  ? R
  : never;

// get keys of tuple
// TupleKeys<[string, string, string]> = 0 | 1 | 2
type TupleKeys<T extends any[]> = Exclude<keyof T, keyof []>;

// apply { foo: ... } to every type in tuple
// Foo<[1, 2]> = { 0: { foo: 1 }, 1: { foo: 2 } }
type Foo<T extends any[]> = {
  [K in TupleKeys<T>]: { foo: T[K] };
};

// get union of field types of an object (another answer by @jcalz again, I guess)
// Values<{ a: string, b: number }> = string | number
type Values<T> = T[keyof T];

// TS won't believe the result will always have a field "foo"
// so we have to check for it with a conditional first
type Unfoo<T> = T extends { foo: any } ? T["foo"] : never;

// combine three helpers to get an intersection of all the item types
type IntersectItems<T extends any[]> = Unfoo<Intersect<Values<Foo<T>>>>;

type Test = [{ a: 1 } | { b: 2 }, { c: 3 }];

// this is what we wanted
type X = IntersectItems<Test>; // { a: 1, c: 3 } | { b: 2, c: 3 }

// this is not what we wanted
type Y = Intersect<Test[number]>; // { a: 1, b: 2, c: 3 }

type FilterTEST = Filter<string>;

const aFilterTEST: FilterTEST = {
  field: SELF,
  operator: "equal",
  value: "hello",
};

type MenuItem =
  | { type: "separator" }
  | { value: number; label?: string }
  | { type: "label"; label: string };

type MenuItem2 =
  | { type: "separator" }
  | { value: number[]; label?: string }
  | { type: "label"; label: string }
  | { type: { a?: number } }
  | { type: { a?: string; f: () => void } };

type MenuItem2Combined = CombineUnion<MenuItem2>;
type TypeProp = MenuItem2Combined["type"];
type CHECK2 = TypeProp extends string ? true : false;
type CHECK3 = Extract<TypeProp, string> extends never ? false : true;

type CHECK = FieldFiltered<MenuItem2, string>;
// type CHECK = "label" | readonly ["label"] | readonly ["type", "a"]

const fmenu: Filter<MenuItem2> = {
  field: ["type", "a"] as const,
  operator: "equal",
  value: "separator",
};

type TYPE = MenuItem["type"];

type MenuItem3 = { type: "separator" } & { value: number; label?: string } & {
  type: "label";
  label: string;
};

type Z = Intersect<MenuItem>;
