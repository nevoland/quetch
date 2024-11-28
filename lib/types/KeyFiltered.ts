import type { SymbolSelf } from "../constants/SymbolSelf";

import type { Key } from "./Key";
import type { Primitive } from "./Primitive";

type SymbolSelfType = typeof SymbolSelf;

/**
 * Returns union of keys whose mapped value extend the provided `P` type.
 */
export type KeyFiltered<T, P> = [0] extends [1 & T]
  ? Key | SymbolSelfType
  : T extends object
    ? T extends Primitive
      ? [MapPrimitive<T>] extends [P]
        ? SymbolSelfType
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
