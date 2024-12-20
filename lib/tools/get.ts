import { SELF } from "../constants/SELF.js";
import type { Get, Path } from "../types";

/**
 * Gets the property value of the given `value` at the specified `path` (an array of object property names or array indexes).
 * If the `path` is undefined, returns the `value` itself.
 * If the `path` is a string, it is considered as a path with one item.
 * If the `path` leads to an unknown property, returns `undefined`.
 *
 * @param value The value from which to get the property value.
 * @param path The path leading to the property value or a property name or `undefined`.
 * @returns The property value found at the given path, or `undefined` if it cannot be found.
 */
export function get<const T, const P extends Path<T> | keyof T>(
  value: T,
  path?: P,
): Get<T, P> {
  if (path === undefined || path === SELF) {
    return value as any;
  }
  switch (typeof path) {
    case "string":
    case "number":
    case "symbol":
      return (value as any)?.[path];
    default: {
      switch (path.length as number) {
        case 0:
          return value as any;
        case 1:
          return (value as any)?.[path[0] as any];
        case 2:
          return (value as any)?.[path[0] as any]?.[(path as any)[1] as any];
        case 3:
          return (value as any)?.[path[0] as any]?.[(path as any)[1] as any]?.[
            (path as any)[2] as any
          ];
        case 4:
          return (value as any)?.[path[0] as any]?.[(path as any)[1] as any]?.[
            (path as any)[2] as any
          ]?.[(path as any)[3] as any];
        default:
          return path.reduce(
            (value, key) => (value as any)?.[key],
            value,
          ) as any;
      }
    }
  }
}
