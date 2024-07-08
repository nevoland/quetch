import type { Field } from "./Field";

/**
 * Order item.
 */
export type Order<T extends object> =
  | Field<T>
  | {
      field: Field<T>;
      descending?: boolean;
    };
