/**
 * Returns the type of the property at the specified `K` key.
 */
export type Get<T extends object, K extends string, D> = T extends {
  [key in K]: any;
}
  ? T[K]
  : D;
