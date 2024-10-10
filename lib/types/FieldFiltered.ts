import type { KeyFiltered } from "./KeyFiltered";
import type { PathFiltered } from "./PathFiltered";

export type FieldFiltered<T extends object, P> =
  | KeyFiltered<Required<T>, P>
  | PathFiltered<Required<T>, P>;
