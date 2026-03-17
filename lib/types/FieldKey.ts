import type { SELF } from "../constants/SELF.ts";

import type { Key } from "./Key.ts";
import type { Primitive } from "./Primitive";

export type FieldKey<T> = T extends Primitive
  ? typeof SELF
  : [unknown] extends [T]
    ? Key
    : keyof T;
