import { EMPTY_OBJECT } from "unchangeable";

import type {
  FieldFiltered,
  FilterChildren,
  FilterStringMatch,
  NormalizedPathFieldSettings,
} from "../types";

import { filterChildren } from "./filterChildren.js";
import { get } from "./get.js";

/**
 * Returns a function that transforms a `FilterChildren` into a `FilterStringMatch`.
 *
 * @param options - Options for the transformer.
 * @returns A function that takes a `FilterChildren` and returns a `FilterStringMatch` that matches the paths of the children of the item specified in the `FilterChildren`.
 */
export function transformerFilterChildren<T>({
  pathField = "path" as FieldFiltered<T, string>,
  pathFieldSeparator = "/",
}: NormalizedPathFieldSettings<T> = EMPTY_OBJECT) {
  return (filter: FilterChildren<T>): FilterStringMatch<T> => {
    const { value, minDepth = 1, maxDepth = Infinity } = filter;
    const parentPath = (get(value, pathField as any) ?? "") as string;
    return filterChildren(
      parentPath,
      pathField,
      minDepth,
      maxDepth,
      pathFieldSeparator,
    );
  };
}
