import { EMPTY_OBJECT } from "unchangeable";

import type {
  FieldFiltered,
  NormalizedPathFieldSettings,
  QuerySettings,
} from "../types";

import { escapeRegex } from "./escapeRegex.js";
import { sameField } from "./sameField.js";

/**
 * Returns a function that transforms a `FilterChildren` into a `FilterStringMatch`.
 *
 * @param options - Options for the transformer.
 * @returns A function that takes a `FilterChildren` and returns a `FilterStringMatch` that matches the paths of the children of the item specified in the `FilterChildren`.
 */
export function comparatorFieldValues<T>({
  pathField = "path" as FieldFiltered<T, string>,
  pathFieldSeparator = "/",
  pathFieldSeparatorEscape = "\\",
  collator,
}: NormalizedPathFieldSettings<T> = EMPTY_OBJECT): QuerySettings<T>["compareFieldValues"] {
  const fieldSeparatorRegexp = new RegExp(
    !pathFieldSeparatorEscape
      ? escapeRegex(pathFieldSeparator)
      : `(?<!(?:${escapeRegex(pathFieldSeparatorEscape)}{2})*${escapeRegex(pathFieldSeparatorEscape)})${escapeRegex(pathFieldSeparator)}`,
    "g",
  );
  return (field, descending, a, b) => {
    if (!sameField(field, pathField)) {
      return undefined;
    }
    // Parents should always appear before their children, regardless of the order direction
    if ((a as string).startsWith(`${b}${pathFieldSeparator}`)) {
      return 1;
    }
    if ((b as string).startsWith(`${a}${pathFieldSeparator}`)) {
      return -1;
    }
    const normalizedA = (a as string).replaceAll?.(
      fieldSeparatorRegexp,
      "\x00",
    );
    const normalizedB = (b as string).replaceAll?.(
      fieldSeparatorRegexp,
      "\x00",
    );
    if (collator) {
      const comparison = collator.compare(normalizedA, normalizedB);
      return descending
        ? comparison > 0
          ? -1
          : comparison < 0
            ? 1
            : 0
        : comparison > 0
          ? 1
          : comparison < 0
            ? -1
            : 0;
    }
    const comparison = normalizedA.localeCompare(normalizedB, undefined, {
      numeric: true,
    });
    const comparisonNormalized = comparison > 0 ? 1 : comparison < 0 ? -1 : 0;
    if (comparisonNormalized > 0) {
      return descending ? -1 : 1;
    }
    if (comparisonNormalized < 0) {
      return descending ? 1 : -1;
    }
    return 0;
  };
}
