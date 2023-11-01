import type { CustomFieldMap } from "./CustomFieldMap";
import type { InjectCustomFields } from "./InjectCustomFields";
import type { Item } from "./Item";
import type { Query } from "./Query";

export type PickFields<T extends object, F extends string | number | symbol> = [
  F,
] extends [keyof T]
  ? { readonly [K in F]: T[K] }
  : { readonly [K in keyof T]: T[K] };

export type ResultRead<
  T extends object,
  Q extends Query<T, C>,
  C extends CustomFieldMap<T>,
  U extends InjectCustomFields<T, C> = InjectCustomFields<T, C>,
> = [C] extends [CustomFieldMap<T>]
  ? [Q] extends [{ fields: (keyof U)[] }]
    ? PickFields<U, Item<Q["fields"]>>
    : U
  : [Q] extends [{ fields: (keyof T)[] }]
  ? PickFields<T, Item<Q["fields"]>>
  : T;

export type Result<
  T extends object,
  Q extends Query<T, C>,
  C extends CustomFieldMap<T>,
  U extends InjectCustomFields<T, C> = InjectCustomFields<T, C>,
> = [Q] extends [{ method: "read" }]
  ? [Q] extends [{ multiple: true }]
    ? ResultRead<T, Q, C, U>[]
    : ResultRead<T, Q, C, U>
  : [Q] extends [{ method: "aggregate" }]
  ? number
  : [Q] extends [{ multiple: true }]
  ? ResultRead<T, Q, C, U>[]
  : ResultRead<T, Q, C, U>;
