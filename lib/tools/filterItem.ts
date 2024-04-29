import { SymbolCache } from "../constants/SymbolCache.js";
import type { Any, FieldFiltered, Filter, FilterString } from "../types";
import type { QuerySettings } from "../types/QuerySettings.js";

import { filterChildren } from "./filterChildren.js";
import { get } from "./get.js";

const { isArray } = Array;

function valueFromFilter<T extends object, F extends Filter<T>>(
  value: T,
  filter: F,
): F extends { value: infer V; reference?: false } ? V : never {
  if ("reference" in filter && filter.reference) {
    return get(value, filter.value) as any;
  }
  return filter.value as any;
}

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
      const filterValue = valueFromFilter(value, filter);
      if (isArray(filterValue)) {
        const item = get(value, filter.field) as Any[] | undefined;
        if (!isArray(item)) {
          return false;
        }
        if (filterValue.length !== item.length) {
          return false;
        }
        return filterValue.every((value) => item.includes(value));
      }
      const item = get(value, filter.field);
      if (item === filterValue) {
        return true;
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          item !== undefined &&
          (filterValue as string).localeCompare(
            item as any,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) === 0
        );
      }
      return false;
    }
    case "notEqual": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field);
      if (item === filterValue) {
        return false;
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (filterValue as string).localeCompare(
            get(value, filter.field) as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
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
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field) as string | undefined;
      if (item === undefined || item.length < filterValue.length) {
        return false;
      }
      if (filter.options !== undefined || filter.locale !== undefined) {
        return (
          filterValue.localeCompare(
            item.slice(0, filterValue.length),
            filter.locale,
            filter.options,
          ) !== 0
        );
      }
      return item.startsWith(filterValue) ?? false;
    }
    case "endWith": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field) as string | undefined;
      if (item === undefined || item.length < filterValue.length) {
        return false;
      }
      if (filter.options !== undefined || filter.locale !== undefined) {
        return (
          filterValue.localeCompare(
            item.slice(-filterValue.length),
            filter.locale,
            filter.options,
          ) !== 0
        );
      }
      return item.endsWith(filterValue) ?? false;
    }
    case "include": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field) as string | any[];
      if (item == null) {
        return false;
      }
      if (isArray(filterValue)) {
        // FIXME: Get unique values
        if (!isArray(item) || item.length < filterValue.length) {
          return false;
        }
        return filterValue.every((value) => item.includes(value));
      }
      if (isArray(item) || item.length < filterValue.length) {
        return false;
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        const { length } = filterValue;
        const end = item.length - length + 1;
        for (let i = 0; i < end; i++) {
          if (
            filterValue.localeCompare(
              item.slice(i, i + length),
              (filter as FilterString<T>).locale,
              (filter as FilterString<T>).options,
            ) === 0
          ) {
            return true;
          }
        }
        return false;
      }
      return item.includes?.(filterValue) ?? false;
    }
    case "greaterThan": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (filterValue as string).localeCompare(
            item as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) < 0
        );
      }
      return item > filterValue;
    }
    case "greaterThanOrEqual": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (filterValue as string).localeCompare(
            item as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) <= 0
        );
      }
      return item >= filterValue;
    }
    case "lowerThan": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (filterValue as string).localeCompare(
            item as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) > 0
        );
      }
      return item < filterValue;
    }
    case "lowerThanOrEqual": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (filterValue as string).localeCompare(
            item as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) >= 0
        );
      }
      return item <= filterValue;
    }
    case "match": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field) as string | undefined;
      if (item === undefined) {
        return false;
      }
      if (filter[SymbolCache] === undefined) {
        filter[SymbolCache] = new RegExp(
          filterValue,
          `${filter.options?.ignoreCase ? "i" : ""}${
            filter.options?.dotAll ? "s" : ""
          }`,
        );
      }
      return filter[SymbolCache].test(item);
    }
    case "intersect": {
      const filterValue = valueFromFilter(value, filter);
      const item = get(value, filter.field);
      if (item == null) {
        return false;
      }
      if (isArray(item)) {
        return (
          isArray(filterValue) &&
          filterValue.some((value) => item.includes(value))
        );
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          item !== undefined &&
          (filterValue as string[]).some(
            (value) =>
              value.localeCompare(
                item as string,
                (filter as FilterString<T>).locale,
                (filter as FilterString<T>).options,
              ) === 0,
          )
        );
      }
      return filterValue.includes(item as string);
    }
    default:
      throw new Error(`Unknown filter operator '${(filter as any).operator}'`);
  }
}
