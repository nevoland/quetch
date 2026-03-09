import type { CACHE } from "../constants/CACHE.js";

import type { Context } from "./Context";
import type { IntrinsicFilter } from "./IntrinsicFilter.js";

/**
 * Matches the direct children of a specified `value` item.
 * If `deep` is `true`, also captures all the descendants.
 */
export type FilterChildren<T> = {
  operator: "children" | "notChildren";
  value?: Context<T> | string;
  deep?: boolean;
  [CACHE]?: IntrinsicFilter<T>;
};
