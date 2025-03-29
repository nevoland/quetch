import type { Order, QuerySettings } from "../types";

import { escapeRegex } from "./escapeRegex.js";
import { get } from "./get.js";
import { normalizeOrder } from "./normalizeOrder.js";
import { sameField } from "./sameField.js";

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
  const {
    pathField,
    pathFieldSeparator,
    pathFieldSeparatorEscape = "\\",
  } = settings ?? {};
  if (orderList === undefined || orderList.length === 0) {
    return value;
  }
  const normalizedOrder = orderList.map(normalizeOrder);
  return value.toSorted((a, b) => {
    for (let index = 0; index < normalizedOrder.length; index++) {
      const { field, descending } = normalizedOrder[index]!;
      const valueA = get(a, field as any);
      const valueB = get(b, field as any);
      if (valueA === valueB) {
        continue;
      }
      if (
        pathFieldSeparator != null &&
        pathField != null &&
        sameField(field, pathField)
      ) {
        const fieldSeparatorRegexp = new RegExp(
          `(?<!${escapeRegex(pathFieldSeparatorEscape)})${escapeRegex(pathFieldSeparator)}`,
          "g",
        );
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
