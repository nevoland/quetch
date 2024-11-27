import type { Path } from "./Path";

/**
 * Returns the type of the property at the specified `P` path.
 */
export type Get<T, P> = [P] extends [readonly [infer K, ...infer R]]
  ? K extends keyof T
    ? R extends Path<T[K]>
      ? Get<T[K], R>
      : T[K]
    : never
  : [P] extends [keyof T]
    ? T[P]
    : T;
