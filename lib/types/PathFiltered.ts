import type { Increment } from "./Increment";
import type { Key } from "./Key";

export type PathFiltered<T, P, D = 0> = [0] extends [1 & T]
  ? readonly (Key | never)[]
  : D extends 2
    ? never
    : T extends ReadonlyArray<infer I>
      ? I extends P
        ? readonly [number]
        : readonly [number, ...PathFiltered<I, P, Increment<D>>]
      : T extends object
        ? {
            [K in keyof T]: T[K] extends P
              ? readonly [K]
              : readonly [K, ...PathFiltered<T[K], P, Increment<D>>];
          }[keyof T]
        : never;
