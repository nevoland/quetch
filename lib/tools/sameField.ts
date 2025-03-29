import type { Field } from "../types";

const { isArray } = Array;

export function sameField(a: Field<any>, b: Field<any>): boolean {
  if (a === b) {
    return true;
  }
  const aNormalized = isArray(a) ? a : [a];
  const bNormalized = isArray(b) ? b : [b];
  if (aNormalized.length !== bNormalized.length) {
    return false;
  }
  return aNormalized.every((value, index) => value === bNormalized[index]);
}
