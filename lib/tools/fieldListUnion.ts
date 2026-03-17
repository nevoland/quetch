import type { Field } from "../types";

import { sameField } from "./sameField.js";

/**
 * Returns the union of two lists of fields, removing any duplicates.
 *
 * @param a - The first list of fields.
 * @param b - The second list of fields.
 * @returns The union of the two lists of fields, with duplicates removed.
 */
export function fieldListUnion<T>(
  a: readonly Field<T>[] | undefined,
  b: readonly Field<T>[] | undefined,
) {
  if (a === undefined) {
    return b;
  }
  if (b === undefined) {
    return a;
  }
  return [
    ...a.filter((fieldA) => !b.some((fieldB) => sameField(fieldA, fieldB))),
    ...b,
  ];
}
