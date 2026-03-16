import { EMPTY_OBJECT } from "unchangeable";

import type { Order, QuerySettings } from "../types";

import { get } from "./get.js";
import { normalizeOrder } from "./normalizeOrder.js";

/**
 * Sorts provided `value` array according to the `orderList`.
 *
 * @param orderList - The order to use for sorting.
 * @param value - The array to sort.
 * @param settings - Optional query settings.
 * @returns A new sorted array.
 */
export function sortItemList<T>(
  orderList: NoInfer<readonly Order<T>[]> | undefined,
  value: readonly T[],
  settings?: QuerySettings<T>,
) {
  if (orderList === undefined || orderList.length === 0) {
    return value;
  }
  const { compareFieldValues } = settings ?? EMPTY_OBJECT;
  const normalizedOrder = orderList.map(normalizeOrder);
  return value.toSorted((a, b) => {
    for (let index = 0; index < normalizedOrder.length; index++) {
      const { field, descending } = normalizedOrder[index]!;
      const valueA = get<any, any>(a, field);
      const valueB = get<any, any>(b, field);
      if (valueA === valueB) {
        continue;
      }
      if (valueA == null) {
        return valueB == null ? 0 : descending ? 1 : -1;
      }
      if (valueB == null) {
        return descending ? -1 : 1;
      }
      const comparison = compareFieldValues?.(field, valueA, valueB);
      if (comparison === undefined) {
        if (valueA > valueB) {
          return descending ? -1 : 1;
        }
        return descending ? 1 : -1;
      }
      if (comparison === 0) {
        continue;
      }
      return descending ? -comparison : comparison;
    }
    return 0;
  });
}
