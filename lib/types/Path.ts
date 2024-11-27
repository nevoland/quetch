import type { Increment } from "./Increment";

export type Path<T, D = 0> = D extends 5
  ? never
  : T extends Array<infer P>
    ? readonly [number] | readonly [number, ...Path<P, Increment<D>>]
    : T extends object
      ? {
          [K in keyof T]: [K] | [K, ...Path<T[K], Increment<D>>];
        }[keyof T]
      : never;
