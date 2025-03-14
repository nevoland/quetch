import { EMPTY_ARRAY } from "unchangeable";

import type { Field, Filter } from "../types";

/**
 * Returns the list of fields used in the provided `filter`.
 *
 * @param filter The filter to extract the fields from.
 * @returns A list of fields.
 */
export function fieldListFromFilter<T>(
  filter?: Filter<T>,
): readonly Field<T>[] {
  if (filter === undefined) {
    return EMPTY_ARRAY;
  }
  switch (filter.operator) {
    case "equal":
    case "include":
    case "intersect":
    case "notEqual":
    case "greaterThan":
    case "greaterThanOrEqual":
    case "lowerThan":
    case "lowerThanOrEqual":
    case "startWith":
    case "endWith":
    case "match":
    case "exist": {
      if ("field" in filter) {
        return [filter.field as Field<T>];
      }
      return EMPTY_ARRAY;
    }
    case "all":
    case "any":
    case "none":
      return filter.value?.flatMap(fieldListFromFilter) ?? EMPTY_ARRAY;
    case "children":
    case "custom":
      return EMPTY_ARRAY;
    default:
      return EMPTY_ARRAY;
  }
}
