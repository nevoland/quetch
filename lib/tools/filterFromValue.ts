import { EMPTY_ARRAY } from "unchangeable";

import { SELF } from "../constants/SELF.js";
import type { Filter } from "../types.js";

const { entries } = Object;

export function filterFromValue<T>(value: T): Filter<T> {
  return {
    operator: "all",
    value: criteria(value),
  };
}

function criteria<T>(
  value: T,
  path: readonly string[] = EMPTY_ARRAY,
): readonly Filter<T>[] {
  return entriesAndSelf(value).flatMap(([field, value]) => {
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
        return criteria<T>(value, [...path, field as string]);
      }
      default:
        return EMPTY_ARRAY;
      // Ignore
    }
  });
}

function entriesAndSelf<T>(value: T): readonly [string | typeof SELF, any][] {
  switch (typeof value) {
    case "symbol":
    case "bigint":
    case "string":
    case "number":
    case "boolean":
    case "undefined":
      return [[SELF, value]];
    case "object": {
      if (value == null) {
        return [[SELF, value]];
      }
      const result = entries(value) as [string | typeof SELF, any][];
      if (SELF in value) {
        result.push([SELF, value[SELF]]);
      }
      return result;
    }
    default:
      return EMPTY_ARRAY;
  }
}
