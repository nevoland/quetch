import { EMPTY_OBJECT } from "unchangeable";

import type {
  FieldFiltered,
  FilterChildren,
  FilterStringMatch,
} from "../types";

import { filterChildren } from "./filterChildren.js";
import { get } from "./get.js";

export type TransformerFilterChildrenOptions<T> = {
  /**
   * Path to the field that contains the path value of an item, used for displaying items in a tree.
   *
   * @default "path"
   */
  pathField?: FieldFiltered<T, string>;
  /**
   * String used to escape the separator.
   *
   * @default "\\"
   */
  pathFieldSeparatorEscape?: string;
  /**
   * Maps path fields to a string used to separate the path nodes of a field value.
   *
   * @default "/"
   */
  pathFieldSeparator?: string;
};

/**
 * Returns a function that transforms a `FilterChildren` into a `FilterStringMatch`.
 *
 * @param options - Options for the transformer.
 * @returns A function that takes a `FilterChildren` and returns a `FilterStringMatch` that matches the paths of the children of the item specified in the `FilterChildren`.
 */
export function transformerFilterChildren<T>({
  pathField = "path" as FieldFiltered<T, string>,
  pathFieldSeparator = "/",
}: TransformerFilterChildrenOptions<T> = EMPTY_OBJECT) {
  return (filter: FilterChildren<T>): FilterStringMatch<T> => {
    const { value, minDepth = 1, maxDepth = Infinity } = filter;
    if (value === undefined) {
      throw new Error("FilterChildren must have a value");
    }
    const parentPath = get(value, pathField as any) as string;
    return filterChildren(
      parentPath,
      pathField,
      minDepth,
      maxDepth,
      pathFieldSeparator,
    );
  };
}
