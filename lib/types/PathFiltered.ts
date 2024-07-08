import type { Increment } from "./Increment";

export type PathFiltered<T, P, D = 0> = D extends 4
  ? never
  : T extends Array<infer I>
  ? I extends P
    ? [number]
    : [number, ...PathFiltered<I, P, Increment<D>>]
  : T extends object
  ? {
      [K in keyof T]-?: T[K] extends P
        ? [K]
        : [K, ...PathFiltered<T[K], P, Increment<D>>];
    }[keyof T]
  : never;
