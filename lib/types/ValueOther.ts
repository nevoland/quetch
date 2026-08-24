import type { FieldFiltered } from "./FieldFiltered";

/**
 * Actual `valueOther` or `valueOtherField` leading to the value.
 */
export type ValueOther<T, V> =
  | {
      /**
       * Value to use.
       */
      valueOther: V;
    }
  | {
      /**
       * Path leading to the value.
       */
      valueOtherField: FieldFiltered<T, V>;
    };
