import { EMPTY_OBJECT, type Path, set } from "unchangeable";

import type { FieldMap, ValueMap } from "../types";

const { isArray } = Array;

export function normalizeFieldSeparatorMap<T>(
  value: FieldMap<T, string> | ValueMap<T, string>,
): ValueMap<T, string> {
  if (isArray(value)) {
    return (value as FieldMap<T, string>).reduce(
      (value, [path, separator]) =>
        set(value, (isArray(path) ? path : [path]) as Path, separator),
      EMPTY_OBJECT,
    );
  }
  return value as ValueMap<T, string>;
}
