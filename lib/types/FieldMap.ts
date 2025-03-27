import type { Field } from "./Field";

/**
 * Maps the fields of the provided value `T` to a specific value `V`.
 */
export type FieldMap<T, V> = readonly [Field<T>, V][];
