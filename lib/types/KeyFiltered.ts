import type { SELF } from "../constants/SELF";

import type { Key } from "./Key";
import type { Primitive } from "./Primitive";

type SymbolSelf = typeof SELF;

/**
 * Returns union of keys whose mapped value extend the provided `P` type.
 */
export type KeyFiltered<T, P> = [0] extends [1 & T]
  ? Key | SymbolSelf
  : T extends object
    ? T extends Primitive
      ? [MapPrimitive<T>] extends [P]
        ? SymbolSelf
        : never
      : keyof {
          [K in keyof T as Extract<T[K], P> extends never ? never : K]-?: T[K];
        }
    : never;

type MapPrimitive<P> = P extends String
  ? string
  : P extends Number
    ? number
    : P extends Boolean
      ? boolean
      : P extends BigInt
        ? bigint
        : never;
