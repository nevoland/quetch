import type { SELF } from "../constants/SELF.ts";

import type { Key } from "./Key.ts";
import type { Primitive } from "./Primitive";

export type FieldKey<T> = [unknown] extends [T]
  ? Key
  : T extends Primitive
    ? typeof SELF
    : keyof T;
