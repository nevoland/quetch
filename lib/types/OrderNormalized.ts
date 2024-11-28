import type { Field } from "./Field";

export type OrderNormalized<T> = {
  field: Field<T>;
  descending?: boolean;
};
