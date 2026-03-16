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
}: NormalizedPathFieldSettings<T> = EMPTY_OBJECT): QuerySettings<T>["compareFieldValues"] {
  const fieldSeparatorRegexp = new RegExp(
    !pathFieldSeparatorEscape
      ? escapeRegex(pathFieldSeparator)
      : `(?<!${escapeRegex(pathFieldSeparatorEscape)})${escapeRegex(pathFieldSeparator)}`,
    "g",
  );
  return (field, a, b) => {
    if (!sameField(field, pathField)) {
      return undefined;
    }
    const normalizedA = (a as string).replaceAll?.(
      fieldSeparatorRegexp,
      "\x00",
    );
    const normalizedB = (b as string).replaceAll?.(
      fieldSeparatorRegexp,
      "\x00",
    );
    if (normalizedA > normalizedB) {
      return 1;
    }
    return -1;
  };
}
