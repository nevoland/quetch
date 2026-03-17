import type { Decrement } from "./Decrement";
import type { DepthLimit } from "./DepthLimit";
import type { Key } from "./Key";
import type { Primitive } from "./Primitive";

export type Path<T, D = DepthLimit> = [unknown] extends [T]
  ? readonly (Key | never)[]
  : [0] extends [1 & T]
    ? readonly (Key | never)[]
    : D extends -1
      ? never
      : T extends Primitive
        ? readonly never[]
        : T extends Array<infer P>
          ? readonly [number] | readonly [number, ...Path<P, Decrement<D>>]
          : T extends object
            ? {
                [K in keyof T]:
                  | readonly [K]
                  | readonly [K, ...Path<T[K], Decrement<D>>];
              }[keyof T]
            : never;
