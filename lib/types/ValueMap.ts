import type { Primitive } from "./Primitive";

/**
 * Maps the properties of the provided value `T` to a specific value `V`.
 */
export type ValueMap<T, V> = T extends Primitive
  ? V
  : T extends Array<infer P>
    ? Record<number, ValueMap<P, V>>
    : T extends object
      ? {
          [K in keyof T]?: ValueMap<T[K], V>;
        }
      : never;
