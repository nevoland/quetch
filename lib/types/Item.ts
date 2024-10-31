/**
 * Returns the inferred item type of an array, or an alternative type if it is something else (e.g., `undefined`).
 */
export type Item<T, S = undefined> =
  T extends Array<infer I> ? I : T extends ReadonlyArray<infer I> ? I : S;
