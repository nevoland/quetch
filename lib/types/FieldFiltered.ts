import type { CombineUnion } from "./CombineUnion";
import type { KeyFiltered } from "./KeyFiltered";
import type { PathFiltered } from "./PathFiltered";

/**
 * Returns union of keys and paths whose mapped value extend the provided `P` type.
 */
export type FieldFiltered<T, P> = KeyOrPathFiltered<CombineUnion<T>, P>;

type KeyOrPathFiltered<T, P> = KeyFiltered<T, P> | PathFiltered<T, P>;
