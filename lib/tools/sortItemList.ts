import type { Order, QuerySettings } from "../types";

import { escapeRegex } from "./escapeRegex.js";
import { get } from "./get.js";
import { normalizeFieldSeparatorMap } from "./normalizeFieldSeparatorMap.js";
import { normalizeOrder } from "./normalizeOrder.js";

/**
 * Sorts provided `value` array according to the `orderList`.
 *
 * @param orderList The order to use for sorting.
 * @param value The array to sort.
 * @param settings Optional query settings.
 * @returns A new sorted array.
 */
export function sortItemList<T>(
  orderList: readonly Order<T>[] | undefined,
  value: readonly T[],
  settings?: QuerySettings<T>,
) {
  const { fieldSeparatorMap, fieldSeparatorEscape = "\\" } = settings ?? {};
  if (orderList === undefined || orderList.length === 0) {
    return value;
  }
  const normalizedOrder = orderList.map(normalizeOrder);
  const normalizedFieldSeparatorMap =
    fieldSeparatorMap == null
      ? undefined
      : normalizeFieldSeparatorMap(fieldSeparatorMap);
  const fieldSeparatorRegexpList =
    normalizedFieldSeparatorMap == null
      ? undefined
      : normalizedOrder.map(({ field }) => {
          const separator = get(
            normalizedFieldSeparatorMap,
            field as any,
          ) as string;
          return separator == null
            ? undefined
            : new RegExp(
                `(?<!${escapeRegex(fieldSeparatorEscape)})${escapeRegex(separator)}`,
                "g",
              );
        });
  return value.toSorted((a, b) => {
    for (let index = 0; index < normalizedOrder.length; index++) {
      const { field, descending } = normalizedOrder[index]!;
      const valueA = get(a, field as any);
      const valueB = get(b, field as any);
      if (valueA === valueB) {
        continue;
      }
      const fieldSeparatorRegexp = fieldSeparatorRegexpList?.[index];
      if (fieldSeparatorRegexp != null) {
        if (valueA == null) {
          return valueB == null ? 0 : descending ? 1 : -1;
        }
        if (valueB == null) {
          return descending ? -1 : 1;
        }
        const normalizedA = (valueA as string).replaceAll(
          fieldSeparatorRegexp,
          "\x00",
        );
        const normalizedB = (valueB as string).replaceAll(
          fieldSeparatorRegexp,
          "\x00",
        );
        if (normalizedA > normalizedB) {
          return descending ? -1 : 1;
        }
        return descending ? 1 : -1;
      }
      if (valueA > valueB) {
        return descending ? -1 : 1;
      }
      return descending ? 1 : -1;
    }
    return 0;
  });
}
