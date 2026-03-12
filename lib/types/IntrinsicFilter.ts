import type { Filter } from "./Filter";

/**
 * Filter that does not rely on query settings, and thus can be evaluated directly on the items.
 */
export type IntrinsicFilter<T> = Exclude<
  Filter<T>,
  { operator: "children" | "notChildren" }
>;
