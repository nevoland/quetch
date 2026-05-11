import type { SELF } from "../constants/SELF.ts";

import type { Key } from "./Key.ts";
import type { Primitive } from "./Primitive";

/**
 * Returns the type of keys that can be used to select fields from a value of type `T`.
 */
export type FieldKey<T> = [unknown] extends [T]
  ? Key
  : T extends Primitive | undefined
    ? typeof SELF
    : keyof T;
