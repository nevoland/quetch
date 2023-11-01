import type { FilterKeys } from "./FilterKeys";

/**
 * Checks if a given boolean field is `true` or `false`.
 */
export type FilterBoolean<T extends object> = {
  operator: "equal" | "notEqual";
  field: FilterKeys<T, boolean>;
  value: boolean;
};
