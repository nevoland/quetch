import type { FieldFiltered } from "./FieldFiltered";

/**
 * Checks if a given boolean field is `true` or `false`.
 */
export type FilterBoolean<T extends object> = {
  operator: "equal" | "notEqual";
  field: FieldFiltered<T, boolean>;
  value: boolean;
};
