import type { Join } from "./Join";
import type { KeyFiltered } from "./KeyFiltered";
import type { PathFiltered } from "./PathFiltered";

export type FieldFiltered<T extends object, P> =
  | KeyFiltered<T, P>
  | PathFiltered<T, P>;
