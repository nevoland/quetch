import type { Filter, FilterGroup } from "../types";

/**
 * Return `true` if the provided filter `value` is a group filter or not.
 *
 * @param value The filter to test.
 * @returns Whether the provided filter is a group filter or not.
 */
export function isFilterGroup<T extends object>(
  value: Filter<T> | undefined,
): value is FilterGroup<T> {
  switch (value?.operator) {
    case "any":
    case "all":
    case "none":
      return true;
    default:
      return false;
  }
}
