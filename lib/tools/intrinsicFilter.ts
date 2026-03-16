import type { Filter, IntrinsicFilter, QuerySettings } from "../types";

/**
 * Transforms a filter into an intrinsic filter by replacing `children` and `notChildren` filters with their transformed versions from the query settings.
 *
 * @param filter - The filter to transform.
 * @param settings - The query settings that may contain a `transformFilterChildren` function to transform `children` and `notChildren` filters.
 * @returns The transformed intrinsic filter.
 */
export function intrinsicFilter<T>(
  settings: Required<Pick<QuerySettings<T>, "transformFilterChildren">>,
  filter: Filter<T>,
): IntrinsicFilter<T> {
  switch (filter.operator) {
    case "any":
    case "all":
    case "none":
      return {
        ...filter,
        value: filter.value?.map((filter) =>
          intrinsicFilter(settings, filter),
        ) as readonly Filter<T>[],
      };
    case "children":
    case "notChildren":
      return settings.transformFilterChildren(filter)!;
    default:
      return filter;
  }
}
