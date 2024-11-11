import type { Item } from "./Item";
import type { Query } from "./Query";

/**
 * Picks fields `F` from object `T`.
 */
export type PickFields<
  T extends object | undefined,
  F extends string | number | symbol,
> = [F] extends [keyof T]
  ? { readonly [K in F]: T[K] }
  : { readonly [K in keyof T]: T[K] };

export type ResultRead<T extends object, Q extends Query<T>> = [Q] extends [
  // FIXME: `keyof T` should be `Field<T>`
  { fields: (keyof T)[] },
]
  ? PickFields<T, Item<Q["fields"]>>
  : T;

export type Result<T extends object, Q extends Query<T>> = [Q] extends [
  { method: "read" },
]
  ? [Q] extends [{ multiple: true }]
    ? readonly ResultRead<T, Q>[]
    : ResultRead<T, Q>
  : [Q] extends [{ method: "aggregate" }]
    ? number
    : [Q] extends [{ multiple: true }]
      ? readonly ResultRead<T, Q>[]
      : ResultRead<T, Q>;
