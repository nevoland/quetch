/**
 * Order item.
 */
export type Order<T extends object> =
  | keyof T
  | {
      field: keyof T;
      descending?: boolean;
    };
