import type { Field } from "./Field";

/**
 * Order item.
 */
export type Order<T> =
  | Field<T>
  | {
      field: Field<T>;
      descending?: boolean;
    };
