import type { Order } from "../types";

import { get } from "./get.js";
import { normalizeOrder } from "./normalizeOrder.js";

/**
 * Sorts provided `value` array *in place* according to the `orderList`.
 *
 * @param orderList The order to use for sorting.
 * @param value The array to sort.
 * @returns The same array sorted in place.
 */
export function sortItemList<T extends object>(
  orderList: Order<T>[] | undefined,
  value: T[],
) {
  if (orderList === undefined || orderList.length === 0) {
    return value;
  }
  const normalizedOrder = orderList.map(normalizeOrder);
  return value.sort((a, b) => {
    for (let index = 0; index < normalizedOrder.length; index++) {
      const { field, descending } = normalizedOrder[index];
      const valueA = get(a, field);
      const valueB = get(b, field);
      if (valueA === valueB) {
        continue;
      }
      if (valueA > valueB) {
        return descending ? -1 : 1;
      }
      return descending ? 1 : -1;
    }
    return 0;
  });
}
