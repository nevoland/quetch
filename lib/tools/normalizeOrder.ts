import type { Field, Order } from "../types";

const { isArray } = Array;

export function normalizeOrder<T extends object>(
  order: Order<T>,
): {
  field: Field<T>;
  descending?: boolean | undefined;
} {
  if (isArray(order) || typeof order !== "object") {
    return {
      descending: false,
      field: order,
    };
  }
  return order;
}
