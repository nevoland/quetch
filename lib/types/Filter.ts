import type { FilterArray } from "./FilterArray";
import type { FilterBoolean } from "./FilterBoolean";
import type { FilterField } from "./FilterField";
import type { FilterNumber } from "./FilterNumber";
import type { FilterSequence } from "./FilterSequence";
import type { FilterString } from "./FilterString";
import type { FilterStringIntersect } from "./FilterStringIntersect";
import type { FilterStringMatch } from "./FilterStringMatch";
/**
 * Describes a predicate for filtering items.
 */
export type Filter<T extends object> =
  | FilterSequence<T>
  | FilterField<T>
  | FilterBoolean<T>
  | FilterString<T>
  | FilterStringMatch<T>
  | FilterStringIntersect<T>
  | FilterNumber<T>
  | FilterArray<T>;
