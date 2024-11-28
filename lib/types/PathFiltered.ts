import type { Increment } from "./Increment";
import type { Key } from "./Key";

export type PathFiltered<T, P, D = 7> = [0] extends [1 & T]
  ? readonly (Key | never)[]
  : D extends -1
    ? never
    : T extends P
      ? readonly never[]
      : T extends ReadonlyArray<infer I>
        ? Extract<I, P> extends never
          ? readonly [number, ...PathFiltered<I, P, Increment<D>>]
          : readonly [number]
        : T extends object
          ? {
              [K in keyof T]: Extract<T[K], P> extends never
                ? readonly [K, ...PathFiltered<T[K], P, Increment<D>>]
                : readonly [K];
            }[keyof T]
          : never;
