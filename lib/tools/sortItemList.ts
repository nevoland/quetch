import type { Order } from "../types";

import { normalizeOrder } from "./normalizeOrder";

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
  const normalizedOrderBy = orderList.map(normalizeOrder);
  return value.sort((a, b) => {
    for (let index = 0; index < normalizedOrderBy.length; index++) {
      const { field, descending } = normalizedOrderBy[index];
      if (a[field] === b[field]) {
        continue;
      }
      if (a[field] > b[field]) {
        return descending ? -1 : 1;
      }
      return descending ? 1 : -1;
    }
    return 0;
  });
}
