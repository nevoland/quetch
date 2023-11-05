import type { Context, Filter } from "../types";

const { entries } = Object;

export function filterFromContext<T extends object>(
  context: Context<T>,
): Filter<T> {
  return {
    operator: "all",
    value: entries(context).map(([field, value]) => ({
      field,
      operator: "equal",
      value,
    })) as Filter<T>[],
  };
}
