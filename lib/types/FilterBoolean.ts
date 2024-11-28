import type { FieldFiltered } from "./FieldFiltered";
import type { Value } from "./Value";

/**
 * Checks if a given boolean field is `true` or `false`.
 */
export type FilterBoolean<T> = {
  operator: "equal" | "notEqual";
  field: FieldFiltered<T, boolean>;
} & Value<T, boolean>;
