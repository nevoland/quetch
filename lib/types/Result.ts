/* eslint-disable line-comment-position */
import type { Field } from "./Field";
import type { IntersectUnion } from "./IntersectUnion";
import type { Prettify } from "./Prettify";
import type { Primitive } from "./Primitive";
import type { Query } from "./Query";
import type { QueryRead } from "./QueryRead";
import type { QueryReadMultiple } from "./QueryReadMultiple";

/**
 * Picks fields `F` from object `T`.
 */
type PickFields<T, F extends readonly Field<T>[]> = [unknown] extends [T]
  ? T
  : T extends Primitive
    ? T
    : [F] extends [readonly [infer J, ...infer R]]
      ? Merge<
          | // J is a single key
          ([J] extends [keyof T]
              ? PickField<T, J, T[J]>
              : // J is a path
                [J] extends [readonly [infer K, ...infer S]]
                ? [K] extends [keyof T]
                  ? PickField<
                      T,
                      K,
                      PickFields<
                        T[K],
                        S extends readonly Field<T[K]>[] ? S : never
                      >
                    >
                  : never
                : never)
          | (R extends readonly never[]
              ? never
              : R extends readonly Field<T>[]
                ? PickFields<T, R>
                : never)
        >
      : never;

type Merge<T> = Prettify<IntersectUnion<T>>;

/**
 * Picks a field `K` from object `T` and returns an object with the field `K` and the value `V`.
 */
type PickField<T, K extends keyof T, V> = {
  [P in keyof Pick<T, K>]: V;
};

/**
 * Result of a read query.
 */
type ResultRead<T, Q extends Query<T>> = [unknown] extends [T]
  ? T
  : [Q] extends [{ fields: readonly Field<T>[] }]
    ? PickFields<T, Q["fields"]>
    : T;

/**
 * Result of a read and aggregate query.
 */
export type Result<T, Q extends Query<T>> = [Q] extends [QueryReadMultiple<T>]
  ? readonly ResultRead<T, Q>[]
  : [Q] extends [QueryRead<T>]
    ? ResultRead<T, Q>
    : [Q] extends [{ method: "aggregate" }]
      ? number
      : never;
