import type { FieldFiltered } from "./FieldFiltered";

export type Value<T extends object, V> =
  | {
      value: V;
      reference?: false;
    }
  | {
      value: FieldFiltered<T, V>;
      reference: true;
    };
