import type { SELF } from "../constants/SELF.js";

import type { CombineUnion } from "./CombineUnion";
import type { Path } from "./Path";
import type { Primitive } from "./Primitive";

export type Field<T> = KeyOrPath<CombineUnion<T>>;

type KeyOrPath<T> = (T extends Primitive ? typeof SELF : keyof T) | Path<T>;
