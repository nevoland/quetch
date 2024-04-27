import { SymbolCache } from "../constants/SymbolCache.js";
import type { Any, FieldFiltered, Filter } from "../types";
import type { QuerySettings } from "../types/QuerySettings.js";

import { filterChildren } from "./filterChildren.js";
import { get } from "./get.js";

const { isArray } = Array;

/**
 * Checks wether the provided `value` matches the `filter` or not.
 *
 * @param filter The filter to apply.
 * @param value The value to check.
 * @param settings Optional query settings.
 * @returns `true` if the `value` matches the `filter` and `false` otherwise.
 */
export function filterItem<T extends object>(
  filter: Filter<T> | undefined,
  value: T | undefined,
  settings?: QuerySettings<T>,
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
      return get(value, filter.value) !== undefined;
    case "equal": {
      if (isArray(filter.value)) {
        const item = get(value, filter.field) as Any[] | undefined;
        if (!isArray(item)) {
          return false;
        }
        if (filter.value.length !== item.length) {
          return false;
        }
        return filter.value.every((value) => item.includes(value));
      }
      const item = get(value, filter.field);
      if (item === filter.value) {
        return true;
      }
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          item !== undefined &&
          filter.value.localeCompare(
            item as any,
            filter.locale,
            filter.options,
          ) === 0
        );
      }
      return false;
    }
    case "notEqual": {
      const item = get(value, filter.field);
      if (item === filter.value) {
        return false;
      }
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          filter.value.localeCompare(
            get(value, filter.field) as string,
            filter.locale,
            filter.options,
          ) !== 0
        );
      }
      return true;
    }
    case "children": {
      if (filter[SymbolCache] === undefined) {
        switch (true) {
          case settings?.transformFilterChildren !== undefined:
            filter[SymbolCache] = settings.transformFilterChildren(filter);
            break;
          default: {
            const {
              pathFieldKey = "id" as FieldFiltered<T, string>,
              pathFieldSeparator = "/",
            } = settings || {};
            filter[SymbolCache] = filterChildren(
              filter.value as string,
              pathFieldKey,
              filter.deep,
              pathFieldSeparator,
            );
          }
        }
      }
      return filterItem(filter[SymbolCache], value);
    }
    case "custom": {
      return filter.value(value);
    }
    case "startWith": {
      const item = get(value, filter.field) as string | undefined;
      if (item === undefined || item.length < filter.value.length) {
        return false;
      }
      if (filter.options !== undefined || filter.locale !== undefined) {
        return (
          filter.value.localeCompare(
            item.slice(0, filter.value.length),
            filter.locale,
            filter.options,
          ) !== 0
        );
      }
      return item.startsWith(filter.value) ?? false;
    }
    case "endWith": {
      const item = get(value, filter.field) as string | undefined;
      if (item === undefined || item.length < filter.value.length) {
        return false;
      }
      if (filter.options !== undefined || filter.locale !== undefined) {
        return (
          filter.value.localeCompare(
            item.slice(-filter.value.length),
            filter.locale,
            filter.options,
          ) !== 0
        );
      }
      return item.endsWith(filter.value) ?? false;
    }
    case "include": {
      const item = get(value, filter.field) as string | any[];
      if (item == null) {
        return false;
      }
      if (isArray(filter.value)) {
        // FIXME: Get unique values
        if (!isArray(item) || item.length < filter.value.length) {
          return false;
        }
        return filter.value.every((value) => item.includes(value));
      }
      if (isArray(item) || item.length < filter.value.length) {
        return false;
      }
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        const { length } = filter.value;
        const end = item.length - length + 1;
        for (let i = 0; i < end; i++) {
          if (
            filter.value.localeCompare(
              item.slice(i, i + length),
              filter.locale,
              filter.options,
            ) === 0
          ) {
            return true;
          }
        }
        return false;
      }
      return item.includes?.(filter.value) ?? false;
    }
    case "greaterThan": {
      const item = get(value, filter.field);
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          filter.value.localeCompare(
            item as string,
            filter.locale,
            filter.options,
          ) < 0
        );
      }
      return item > filter.value;
    }
    case "greaterThanOrEqual": {
      const item = get(value, filter.field);
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          filter.value.localeCompare(
            item as string,
            filter.locale,
            filter.options,
          ) <= 0
        );
      }
      return item >= filter.value;
    }
    case "lowerThan": {
      const item = get(value, filter.field);
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          filter.value.localeCompare(
            item as string,
            filter.locale,
            filter.options,
          ) > 0
        );
      }
      return item < filter.value;
    }
    case "lowerThanOrEqual": {
      const item = get(value, filter.field);
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          filter.value.localeCompare(
            item as string,
            filter.locale,
            filter.options,
          ) >= 0
        );
      }
      return item <= filter.value;
    }
    case "match": {
      const item = get(value, filter.field) as string | undefined;
      if (item === undefined) {
        return false;
      }
      if (filter[SymbolCache] === undefined) {
        filter[SymbolCache] = new RegExp(
          filter.value,
          `${filter.options?.ignoreCase ? "i" : ""}${
            filter.options?.dotAll ? "s" : ""
          }`,
        );
      }
      return filter[SymbolCache].test(item);
    }
    case "intersect": {
      const item = get(value, filter.field);
      if (item == null) {
        return false;
      }
      if (isArray(item)) {
        return (
          isArray(filter.value) &&
          filter.value.some((value) => item.includes(value))
        );
      }
      if (
        ("options" in filter && filter.options) ||
        ("locale" in filter && filter.locale)
      ) {
        return (
          item !== undefined &&
          filter.value.some(
            (value) =>
              value.localeCompare(
                item as string,
                filter.locale,
                filter.options,
              ) === 0,
          )
        );
      }
      return filter.value.includes(item as string);
    }
    default:
      throw new Error(`Unknown filter operator '${(filter as any).operator}'`);
  }
}
