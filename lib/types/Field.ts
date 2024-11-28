import type { CombineUnion } from "./CombineUnion";
import type { Path } from "./Path";

export type Field<T> = KeyOrPath<CombineUnion<T>>;

type KeyOrPath<T> = keyof T | Path<T>;
