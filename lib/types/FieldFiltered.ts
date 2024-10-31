import type { KeyFiltered } from "./KeyFiltered";
import type { Normalized } from "./Normalized";
import type { PathFiltered } from "./PathFiltered";

export type FieldFiltered<T extends object, P> =
  | KeyFiltered<Normalized<T>, P>
  | PathFiltered<Normalized<T>, P>;
