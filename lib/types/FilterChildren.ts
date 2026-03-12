import type { CACHE } from "../constants/CACHE.js";

import type { Context } from "./Context";
import type { IntrinsicFilter } from "./IntrinsicFilter.js";

/**
 * Matches the direct children of a specified `value` item.
 */
export type FilterChildren<T> = {
  operator: "children" | "notChildren";
  value?: Context<T>;
  /**
   * Minimum depth of the children to match. If `0`, matches the parent. If `1`, matches the direct children, if `2`, the grandchildren, and so on.
   *
   * @default 1
   */
  minDepth?: number;
  /**
   * Maximum depth of the children to match. If `0`, matches the direct children. If `1`, matches the grandchildren, and so on.
   *
   * @default Infinity
   */
  maxDepth?: number;
  [CACHE]?: IntrinsicFilter<T>;
};
