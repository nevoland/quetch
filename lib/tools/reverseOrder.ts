import type { Field, Order } from "../types";

import { normalizeOrder } from "./normalizeOrder.js";

/**
 * Reverses the provided `order`.
 *
 * @param order The order to reverse.
 * @returns The reversed order.
 */
export function reverseOrder<T extends object>(
  order: Order<T>,
): {
  field: Field<T>;
  descending?: boolean | undefined;
} {
  const normalizedOrder = normalizeOrder(order);
  return {
    field: normalizedOrder.field,
    descending: !normalizedOrder.descending,
  };
}
