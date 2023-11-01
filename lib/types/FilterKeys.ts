/**
 * Returns object type with field extending the provided `P` type.
 */
export type FilterKeys<T extends object, P> = {
  [K in keyof T]-?: T[K] extends P ? K : never;
}[keyof T];
