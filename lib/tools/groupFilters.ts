import { isDefined } from "unchangeable";

import type { Filter } from "../types";

/**
 * Groups filters together with the specified operator.
 *
 * If no filters are provided, returns `undefined` for `"all"` and `"any"`, and `{ operator: "none" }` for `"none"`.
 *
 * If only one filter is provided, returns that filter directly for `"all"` and `"any"`, and wraps it in a `"none"` filter for `"none"`.
 *
 * @param operator - The operator to use for grouping the filters (`"all"`, `"any"`, or `"none"`).
 * @param filters - The filters to group together.
 * @returns - A single filter representing the grouped filters, or `undefined` if no filters are provided and the operator is `"all"` or `"any"`.
 */
export function groupFilters<T>(
  operator: "all" | "any" | "none",
  ...filters: readonly (Filter<T> | undefined)[]
): Filter<T> | undefined {
  const definedFilters = filters.filter(isDefined);
  switch (definedFilters.length) {
    case 0:
      if (operator === "none") {
        return { operator: "none" };
      }
      return undefined;
    case 1:
      if (operator === "none") {
        return { operator: "none", value: definedFilters };
      }
      return definedFilters[0];
    default:
      return { operator, value: definedFilters };
  }
}
