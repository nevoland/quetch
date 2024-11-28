import type { SymbolSelf } from "../constants/SymbolSelf";

import type { Key } from "./Key";
import type { Primitive } from "./Primitive";

type SymbolSelfType = typeof SymbolSelf;

/**
 * Returns object type with field extending the provided `P` type.
 */
export type KeyFiltered<T, P> = [0] extends [1 & T]
  ? Key | SymbolSelfType
  : T extends object
    ? T extends Primitive
      ? [MapPrimitive<T>] extends [P]
        ? SymbolSelfType
        : never
      : keyof T &
          keyof {
            [K in keyof T as T[K] extends P ? K : never]-?: T[K];
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
