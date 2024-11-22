import { EMPTY_ARRAY } from "unchangeable";

import type { Context, Filter } from "../types";

const { entries } = Object;

export function filterFromContext<T extends object>(
  context: Context<T>,
): Filter<T> {
  return {
    operator: "all",
    value: criteria(context) as Filter<T>[],
  };
}

function criteria<T extends object>(
  context: object,
  path: readonly string[] = EMPTY_ARRAY,
): readonly Filter<T>[] {
  return entries(context).flatMap(([field, value]) => {
    switch (typeof value) {
      case "bigint":
      case "string":
      case "number":
      case "boolean":
      case "symbol":
      case "undefined":
        return [
          {
            field: path.length === 0 ? field : [...path, field],
            operator: "equal",
            value,
          },
        ];
      case "object":
        return criteria(value, [...path, field]);
      default:
        return EMPTY_ARRAY;
      // Ignore
    }
  });
}

/* 

{
  filter: {
    field: "a"
  }
}

{
  operator: "equal",
  field: ["filter", "field"],
  value: "a"
}
  
*/
