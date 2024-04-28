import type { FieldFiltered } from "./FieldFiltered";

export type Value<T extends object, V> =
  | {
      value: V;
      reference?: false;
    }
  | {
      reference: true;
      value: FieldFiltered<T, V>;
    };
