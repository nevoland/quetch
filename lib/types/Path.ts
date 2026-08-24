import type { Decrement } from "./Decrement";
import type { DepthLimit } from "./DepthLimit";
import type { Primitive } from "./Primitive";

/**
 * Returns the type of paths that can be used to select fields from a value of type `T`, with an optional depth limit `D`.
 */
export type Path<T, D = DepthLimit> = [unknown] extends [T]
  ? readonly (PropertyKey | never)[]
  : D extends -1
    ? never
    : T extends Primitive | undefined
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
