import type { SELF } from "../constants/SELF";

import type { Key } from "./Key";

type SymbolSelf = typeof SELF;

/**
 * Returns union of keys whose mapped value extend the provided `P` type.
 */
export type KeyFiltered<T, P> = [0] extends [1 & T]
  ? Key | SymbolSelf
  : T extends string | number | boolean | bigint | symbol
    ? T extends P
      ? SymbolSelf
      : never
    : T extends object
      ? keyof {
          [K in keyof T as Extract<T[K], P> extends never ? never : K]-?: T[K];
        }
      : never;
