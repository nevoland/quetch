import type { Increment } from "./Increment";
import type { Key } from "./Key";
import type { Primitive } from "./Primitive";

export type Path<T, D = 6> = [0] extends [1 & T]
  ? readonly (Key | never)[]
  : D extends -1
    ? never
    : T extends Array<infer P>
      ? readonly [number] | readonly [number, ...Path<P, Increment<D>>]
      : T extends object
        ? T extends Primitive
          ? readonly never[]
          : {
              [K in keyof T]: [K] | [K, ...Path<T[K], Increment<D>>];
            }[keyof T]
        : never;
