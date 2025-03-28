import { EMPTY_OBJECT } from "unchangeable";

import { CACHE } from "../constants/CACHE.js";
import type { QuerySettings } from "../types/QuerySettings.js";
import type { FieldFiltered, Filter, FilterString } from "../types.js";

import { filterChildren } from "./filterChildren.js";
import { get } from "./get.js";
import { normalizeFieldSeparatorMap } from "./normalizeFieldSeparatorMap.js";

const { isArray } = Array;

function valueFromFilter<T>(value: T, filter: Filter<T>): any {
  if ("valueField" in filter) {
    filter.valueField;
    return get<T, any>(value, filter.valueField) as any;
  }
  return (filter as any).value;
}

/**
 * Checks wether the provided `value` matches the `filter` or not.
 *
 * @param filter The filter to apply.
 * @param value The value to check.
 * @param settings Optional query settings.
 * @returns `true` if the `value` matches the `filter` and `false` otherwise.
 */
export function testFilter<T>(
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
      return filter.value.every((filter) => testFilter(filter, value));
    case "any": {
      if (filter.value === undefined || filter.value.length === 0) {
        return true;
      }
      return filter.value.some((filter) => testFilter(filter, value));
    }
    case "none": {
      if (filter.value === undefined || filter.value.length === 0) {
        return false;
      }
      return filter.value.every((filter) => !testFilter(filter, value));
    }
    case "exist":
      return get(value, filter.field as any) !== undefined;
    case "equal": {
      const rightValue = valueFromFilter(value, filter as Filter<any>);
      if (isArray(rightValue)) {
        filter.field;
        const leftValue = get<T, any>(value, filter.field);
        if (!isArray(leftValue)) {
          return false;
        }
        if (rightValue.length !== leftValue.length) {
          return false;
        }
        return rightValue.every((value) => leftValue.includes(value));
      }
      const leftValue = get<T, any>(value, filter.field);
      if (leftValue === rightValue) {
        return true;
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          leftValue !== undefined &&
          (rightValue as string).localeCompare(
            leftValue as any,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) === 0
        );
      }
      return false;
    }
    case "notEqual": {
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field);
      if (leftValue === rightValue) {
        return false;
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (rightValue as string).localeCompare(
            get<T, any>(value, filter.field) as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) !== 0
        );
      }
      return true;
    }
    case "children":
    case "notChildren": {
      const not = filter.operator[0] === "n";
      if (filter[CACHE] === undefined) {
        switch (true) {
          case settings?.transformFilterChildren !== undefined:
            filter[CACHE] = settings.transformFilterChildren(filter);
            break;
          default: {
            const {
              pathFieldKey = "id" as FieldFiltered<T, string>,
              fieldSeparatorMap,
            } = settings || (EMPTY_OBJECT as QuerySettings<T>);
            const pathFieldSeparator =
              fieldSeparatorMap == null
                ? undefined
                : (get(
                    normalizeFieldSeparatorMap(fieldSeparatorMap),
                    pathFieldKey as any,
                  ) as string);
            filter[CACHE] = filterChildren(
              filter.value as string,
              pathFieldKey,
              filter.deep,
              pathFieldSeparator,
            );
          }
        }
      }
      return negate(testFilter(filter[CACHE], value), not);
    }
    case "custom": {
      return filter.value(value);
    }
    case "startWith":
    case "notStartWith": {
      const not = filter.operator[0] === "n";
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field) as string | undefined;
      if (leftValue === undefined || leftValue.length < rightValue.length) {
        return negate(false, not);
      }
      if (filter.options !== undefined || filter.locale !== undefined) {
        return negate(
          rightValue.localeCompare(
            leftValue.slice(0, rightValue.length),
            filter.locale,
            filter.options,
          ) === 0,
          not,
        );
      }
      return negate(leftValue.startsWith(rightValue) ?? false, not);
    }
    case "endWith":
    case "notEndWith": {
      const not = filter.operator[0] === "n";
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field) as string | undefined;
      if (leftValue === undefined || leftValue.length < rightValue.length) {
        return negate(false, not);
      }
      if (filter.options !== undefined || filter.locale !== undefined) {
        return negate(
          rightValue.localeCompare(
            leftValue.slice(-rightValue.length),
            filter.locale,
            filter.options,
          ) === 0,
          not,
        );
      }
      return negate(leftValue.endsWith(rightValue) ?? false, not);
    }
    case "include":
    case "notInclude": {
      const not = filter.operator[0] === "n";
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field) as string | any[];
      if (leftValue == null) {
        return negate(false, not);
      }
      if (isArray(rightValue)) {
        // FIXME: Get unique values
        if (!isArray(leftValue) || leftValue.length < rightValue.length) {
          return negate(false, not);
        }
        return negate(
          rightValue.every((value) => leftValue.includes(value)),
          not,
        );
      }
      if (isArray(leftValue) || leftValue.length < rightValue.length) {
        return negate(false, not);
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        const { length } = rightValue;
        const end = leftValue.length - length + 1;
        for (let i = 0; i < end; i++) {
          if (
            rightValue.localeCompare(
              leftValue.slice(i, i + length),
              (filter as FilterString<T>).locale,
              (filter as FilterString<T>).options,
            ) === 0
          ) {
            return negate(true, not);
          }
        }
        return negate(false, not);
      }
      return negate(leftValue.includes?.(rightValue) ?? false, not);
    }
    case "greaterThan": {
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (rightValue as string).localeCompare(
            leftValue as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) < 0
        );
      }
      return leftValue > rightValue;
    }
    case "greaterThanOrEqual": {
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (rightValue as string).localeCompare(
            leftValue as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) <= 0
        );
      }
      return leftValue >= rightValue;
    }
    case "lowerThan": {
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (rightValue as string).localeCompare(
            leftValue as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) > 0
        );
      }
      return leftValue < rightValue;
    }
    case "lowerThanOrEqual": {
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field);
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return (
          (rightValue as string).localeCompare(
            leftValue as string,
            (filter as FilterString<T>).locale,
            (filter as FilterString<T>).options,
          ) >= 0
        );
      }
      return leftValue <= rightValue;
    }
    case "match":
    case "notMatch": {
      const not = filter.operator[0] === "n";
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field) as string | undefined;
      if (leftValue === undefined) {
        return negate(false, not);
      }
      if (filter[CACHE] === undefined) {
        filter[CACHE] = new RegExp(
          rightValue,
          `${filter.options?.ignoreCase ? "i" : ""}${
            filter.options?.dotAll ? "s" : ""
          }`,
        );
      }
      return negate(filter[CACHE].test(leftValue), not);
    }
    case "intersect":
    case "notIntersect": {
      const not = filter.operator[0] === "n";
      const rightValue = valueFromFilter(value, filter);
      const leftValue = get<T, any>(value, filter.field);
      if (leftValue == null) {
        return negate(false, not);
      }
      if (isArray(leftValue)) {
        return negate(
          isArray(rightValue) &&
            rightValue.some((value) => leftValue.includes(value)),
          not,
        );
      }
      if (
        (filter as FilterString<T>).options ||
        (filter as FilterString<T>).locale
      ) {
        return negate(
          leftValue !== undefined &&
            (rightValue as string[]).some(
              (value) =>
                value.localeCompare(
                  leftValue as string,
                  (filter as FilterString<T>).locale,
                  (filter as FilterString<T>).options,
                ) === 0,
            ),
          not,
        );
      }
      return negate(rightValue.includes(leftValue as string), not);
    }
    default:
      throw new Error(`Unknown filter operator '${(filter as any).operator}'`);
  }
}

function negate(value: boolean, condition: boolean) {
  return condition ? !value : value;
}
