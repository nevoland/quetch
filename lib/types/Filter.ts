import type { FilterArray } from "./FilterArray";
import type { FilterBoolean } from "./FilterBoolean";
import type { FilterChildren } from "./FilterChildren";
import type { FilterCustom } from "./FilterCustom";
import type { FilterField } from "./FilterField";
import type { FilterGroup } from "./FilterGroup";
import type { FilterNumber } from "./FilterNumber";
import type { FilterString } from "./FilterString";
import type { FilterStringIntersect } from "./FilterStringIntersect";
import type { FilterStringMatch } from "./FilterStringMatch";

/**
 * Describes a predicate for filtering items.
 */
export type Filter<T extends object> =
  | FilterArray<T>
  | FilterBoolean<T>
  | FilterChildren<T>
  | FilterCustom<T>
  | FilterField<T>
  | FilterNumber<T>
  | FilterGroup<T>
  | FilterString<T>
  | FilterStringIntersect<T>
  | FilterStringMatch<T>;
