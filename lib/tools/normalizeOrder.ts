import type { Field, Order } from "../types";

const isArray = Array.isArray as (value: any) => value is readonly any[];

/**
 * Returns a normalized order, which is an object with the `field` and `descending` properties.
 *
 * @param order The string or order object.
 * @returns The normalized order object.
 */
export function normalizeOrder<T extends object>(
  order: Order<T>,
): {
  field: Field<T>;
  descending?: boolean | undefined;
} {
  if (isArray(order) || typeof order !== "object") {
    return {
      field: order as any,
      descending: false,
    };
  }
  return order;
}
