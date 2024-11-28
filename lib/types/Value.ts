import type { FieldFiltered } from "./FieldFiltered";

/**
 * Actual `value` or `valueField` leading to the value.
 */
export type Value<T, V> =
  | {
      /**
       * Value to use.
       */
      value: V;
    }
  | {
      /**
       * Path leading to the value.
       */
      valueField: FieldFiltered<T, V>;
    };
