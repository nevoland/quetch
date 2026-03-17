import type { FieldFiltered, FilterStringMatch } from "../types.js";

import { escapeRegex } from "./escapeRegex.js";

/**
 * Generates a filter that matches items whose path field indicates they are children of a given parent path, with an optional depth range.
 *
 * @param parentPath - The path of the parent item.
 * @param pathFieldKey - The key of the field that contains the path information.
 * @param minDepth - The minimum depth of the child items relative to the parent.
 * @param maxDepth - The maximum depth of the child items relative to the parent.
 * @param pathSeparator - The character used to separate path segments.
 * @param not - If true, generates a filter that matches items that are not children of the given parent path.
 * @returns A filter that can be used to match child items.
 */
export function filterChildren<T>(
  parentPath: string,
  pathFieldKey: FieldFiltered<T, string>,
  minDepth = 1,
  maxDepth = Infinity,
  pathSeparator = "/",
  not = false,
): FilterStringMatch<T> {
  const escapedSeparator = escapeRegex(pathSeparator);
  const segment = `${escapedSeparator}[^${escapedSeparator}]+`;
  const quantifier =
    minDepth === 1 && maxDepth === 1
      ? ""
      : `{${minDepth},${maxDepth === Infinity ? "" : maxDepth}}`;
  return {
    field: pathFieldKey,
    operator: not ? "notMatch" : "match",
    value: `^${escapeRegex(parentPath)}(?:${segment})${quantifier}$`,
  };
}
