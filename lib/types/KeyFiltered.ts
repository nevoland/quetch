/**
 * Returns object type with field extending the provided `P` type.
 */
export type KeyFiltered<T extends object, P> = keyof T &
  keyof {
    [K in keyof T as T[K] extends P ? K : never]-?: T[K];
  };
