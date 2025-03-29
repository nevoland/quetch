import type { CombineUnion } from "./CombineUnion";
import type { FieldKey } from "./FieldKey.js";
import type { Path } from "./Path";

export type Field<T> = KeyOrPath<CombineUnion<T>>;

type KeyOrPath<T> = FieldKey<T> | Path<T>;
