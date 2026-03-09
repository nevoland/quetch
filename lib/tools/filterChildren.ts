import type { FieldFiltered, IntrinsicFilter } from "../types.ts";

import { escapeRegex } from "./escapeRegex.js";

export function filterChildren<T>(
  parentPath: string,
  pathFieldKey: FieldFiltered<T, string>,
  minDepth = 0,
  maxDepth = Infinity,
  pathSeparator = "/",
): IntrinsicFilter<T> {
  return {
    field: pathFieldKey,
    operator: "match",
    value: childrenRegex(parentPath, minDepth, maxDepth, pathSeparator),
  };
}

function childrenRegex(
  parentPath: string,
  minDepth = 0,
  maxDepth = Infinity,
  pathSeparator = "/",
): string {
  const escapedSeparator = escapeRegex(pathSeparator);
  return `^${escapeRegex(parentPath)}${
    parentPath === "" ? "" : escapedSeparator
  }${minDepth === 0 && maxDepth === Infinity ? "" : `(?:[^${escapedSeparator}]{1,}){${minDepth + 1},${maxDepth === Infinity ? "" : maxDepth}}$`}`;
}
