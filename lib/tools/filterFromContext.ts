import { EMPTY_ARRAY } from "unchangeable";

import { SELF } from "../constants/SELF.js";
import type { Context, Filter } from "../types";

const { entries } = Object;

export function filterFromContext<T>(context: Context<T>): Filter<T> {
  return {
    operator: "all",
    value: criteria(context),
  };
}

function criteria<T>(
  context: object,
  path: readonly string[] = EMPTY_ARRAY,
): readonly Filter<T>[] {
  return entriesAndSelf(context).flatMap(([field, value]) => {
    switch (typeof value) {
      case "symbol":
        return [
          {
            field: SELF,
            operator: "equal",
            value,
          } as any,
        ];
      case "bigint":
      case "string":
      case "number":
      case "boolean":
      case "undefined":
        return [
          {
            field: path.length === 0 ? field : [...path, field],
            operator: "equal",
            value,
          } as Filter<T>,
        ];
      case "object": {
        if (value == null) {
          return [
            {
              field: path.length === 0 ? field : [...path, field],
              operator: "equal",
              value,
            } as Filter<T>,
          ];
        }
        return criteria(value, [...path, field as string]);
      }
      default:
        return EMPTY_ARRAY;
      // Ignore
    }
  });
}

function entriesAndSelf(
  context: object,
): readonly [string | typeof SELF, any][] {
  const result = entries(context) as [string | typeof SELF, any][];
  if (SELF in context) {
    result.push([SELF, context[SELF]]);
  }
  return result;
}
