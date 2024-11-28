import type { CombineUnion } from "./CombineUnion";
import type { KeyFiltered } from "./KeyFiltered";
import type { PathFiltered } from "./PathFiltered";

export type FieldFiltered<T, P> = KeyOrPathFiltered<CombineUnion<T>, P>;

type KeyOrPathFiltered<T, P> = KeyFiltered<T, P> | PathFiltered<T, P>;
