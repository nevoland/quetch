/**
 * Specifies how items should be grouped.
 */
export type Group<T> =
  | keyof T
  | {
      field: keyof T;
    };
