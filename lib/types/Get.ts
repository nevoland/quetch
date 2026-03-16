import type { Decrement } from "./Decrement";
import type { DepthLimit } from "./DepthLimit";
import type { Path } from "./Path";

/**
 * Returns the type of the property at the specified `P` path.
 */
export type Get<T, P, D = DepthLimit> = [0] extends [1 & T]
  ? any
  : D extends -1
    ? any
    : [P] extends [readonly [infer K, ...infer R]]
      ? K extends keyof T
        ? R extends Path<T[K]>
          ? Get<T[K], R, Decrement<D>>
          : T[K]
        : never
      : [P] extends [keyof T]
        ? T[P]
        : T;
