import type { Any, Filter } from "../types";

const { isArray } = Array;

/**
 * Checks wether the provided `value` matches the `filter` or not.
 *
 * @param filter The filter to apply.
 * @param value The value to check.
 * @returns `true` if the `value` matches the `filter` and `false` otherwise.
 */
export function filterItem<T extends object>(
  filter: Filter<T> | undefined,
  value: T | undefined,
): boolean {
  if (value === undefined) {
    return false;
  }
  if (filter === undefined) {
    return true;
  }
  switch (filter.operator) {
    case "all":
      return filter.value.every((filter) => filterItem(filter, value));
    case "any": {
      if (filter.value === undefined || filter.value.length === 0) {
        return true;
      }
      return filter.value.some((filter) => filterItem(filter, value));
    }
    case "none": {
      if (filter.value === undefined || filter.value.length === 0) {
        return false;
      }
      return filter.value.every((filter) => !filterItem(filter, value));
    }
    case "exist":
      // TODO: Handle path
      return filter.field in value;
    case "equal": {
      if (isArray(filter.value)) {
        const item = value[filter.field] as Any[] | undefined;
        if (!isArray(item)) {
          return false;
        }
        if (filter.value.length !== item.length) {
          return false;
        }
        return filter.value.every((value) => item.includes(value));
      }
      return value[filter.field] === filter.value;
    }
    case "notEqual":
      return value[filter.field] !== filter.value;
    case "startWith":
      return (
        (value[filter.field] as string | undefined)?.startsWith(filter.value) ??
        false
      );
    case "endWith":
      return (
        (value[filter.field] as string | undefined)?.endsWith(filter.value) ??
        false
      );
    case "include": {
      const item = value[filter.field];
      if (item === undefined) {
        return false;
      }
      if (isArray(filter.value)) {
        if (!isArray(item)) {
          return false;
        }
        return filter.value.every((value) => item.includes(value));
      }
      return (item as string).includes?.(filter.value) ?? false;
    }
    case "greaterThan":
      return value[filter.field] > filter.value;
    case "greaterThanOrEqual":
      return value[filter.field] >= filter.value;
    case "lowerThan":
      return value[filter.field] < filter.value;
    case "lowerThanOrEqual":
      return value[filter.field] <= filter.value;
    case "match": {
      const item = value[filter.field] as string | undefined;
      if (item === undefined) {
        return false;
      }
      if (filter.regularExpression === undefined) {
        const { options = {} } = filter;
        filter.regularExpression = new RegExp(
          filter.value,
          `${options.ignoreCase ? "i" : ""}${options.dotAll ? "s" : ""}`,
        );
      }
      return filter.regularExpression.test(item);
    }
    case "intersect": {
      const item = value[filter.field];
      if (item === undefined) {
        return false;
      }
      if (isArray(item)) {
        return filter.value.some((value) => item?.includes(value));
      }
      return filter.value.includes(item as string);
    }
    default:
      throw new Error(`Unknown filter operator '${(filter as any).operator}'`);
  }
}