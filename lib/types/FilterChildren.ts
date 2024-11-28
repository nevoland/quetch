import type { SymbolCache } from "../constants";

import type { Context } from "./Context";
import type { Filter } from "./Filter";

/**
 * Matches the direct children of a specified `value` item.
 * If `deep` is `true`, also captures all the descendants.
 */
export type FilterChildren<T> = {
  operator: "children";
  value?: Context<T> | string;
  deep?: boolean;
  [SymbolCache]?: Filter<T>;
};
