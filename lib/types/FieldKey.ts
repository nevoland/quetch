import type { SELF } from "../constants/SELF.ts";

import type { Primitive } from "./Primitive";

export type FieldKey<T> = T extends Primitive ? typeof SELF : keyof T;
