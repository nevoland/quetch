import type { SELF } from "../constants/SELF";

type SymbolSelf = typeof SELF;

/**
 * Returns union of keys whose mapped value extend the provided `P` type.
 */
export type KeyFiltered<T, P> = [unknown] extends [T]
  ? PropertyKey | SymbolSelf
  : [0] extends [1 & T]
    ? PropertyKey | SymbolSelf
    : T extends string | number | boolean | bigint | symbol
      ? T extends P
        ? SymbolSelf
        : never
      : T extends object
        ? keyof {
            [K in keyof T as Extract<T[K], P> extends never
              ? never
              : K]-?: T[K];
          }
        : never;
