import type { Order } from "../types";

export function normalizeOrder<T extends object>(
  order: Order<T>,
): { field: keyof T; descending?: boolean } {
  if (typeof order === "object") {
    return order;
  }
  return {
    descending: false,
    field: order,
  };
}
