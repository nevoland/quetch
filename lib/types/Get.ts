import type { Path } from "./Path";

/**
 * Returns the type of the property at the specified `K` key.
 */
export type Get<T, P> = [P] extends [[infer K, ...infer R]]
  ? K extends keyof T
    ? R extends Path<T[K]>
      ? Get<T[K], R>
      : T[K]
    : never
  : never;
