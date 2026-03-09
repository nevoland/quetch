import type { FieldFiltered, IntrinsicFilter } from "../types.ts";

import { escapeRegex } from "./escapeRegex.js";

export function filterChildren<T>(
  parentPath: string,
  pathFieldKey: FieldFiltered<T, string>,
  deep = false,
  pathSeparator = "/",
): IntrinsicFilter<T> {
  return {
    field: pathFieldKey,
    operator: "match",
    value: childrenRegex(parentPath, deep, pathSeparator),
  };
}

function childrenRegex(
  parentPath: string,
  deep = false,
  pathSeparator = "/",
): string {
  const escapedSeparator = escapeRegex(pathSeparator);
  return `^${escapeRegex(parentPath)}${
    parentPath === "" ? "" : escapedSeparator
  }${deep ? "" : `[^${escapedSeparator}]{1,}$`}`;
}
