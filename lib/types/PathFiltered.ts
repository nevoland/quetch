import type { Decrement } from "./Decrement";
import type { DepthLimit } from "./DepthLimit";
import type { Key } from "./Key";

/**
 * Returns the type of paths that can be used to select fields from a value of type `T` whose mapped value extend the provided `P` type, with an optional depth limit `D`.
 */
export type PathFiltered<T, P, D = DepthLimit> = [unknown] extends [T]
  ? readonly (Key | never)[]
  : [0] extends [1 & T]
    ? readonly (Key | never)[]
    : D extends -1
      ? never
      : T extends P
        ? readonly never[]
        : T extends ReadonlyArray<infer I>
          ? Extract<I, P> extends never
            ? readonly [number, ...PathFiltered<I, P, Decrement<D>>]
            : readonly [number]
          : T extends object
            ? {
                [K in keyof T]: Extract<T[K], P> extends never
                  ? readonly [K, ...PathFiltered<T[K], P, Decrement<D>>]
                  : readonly [K];
              }[keyof T]
            : never;
