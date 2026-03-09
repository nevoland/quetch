import type { CACHE } from "../constants/CACHE.js";

import type { Context } from "./Context";
import type { IntrinsicFilter } from "./IntrinsicFilter.js";

/**
 * Matches items identified by their context.
 */
export type FilterContext<T> = {
  operator: "is" | "notIs";
  value: Context<T>;
  [CACHE]?: IntrinsicFilter<T>;
};
