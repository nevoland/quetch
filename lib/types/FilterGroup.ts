import type { Filter } from "./Filter";

/**
 * Joins a list of filters with a specific boolean operator.
 */
export type FilterGroup<T extends object> =
  | {
      /**
       * Boolean operator to use for joining the filters.
       */
      operator: "all";
      /**
       * Filters to join.
       */
      value: Filter<T>[];
    }
  | {
      /**
       * Boolean operator to use for joining the filters.
       */
      operator: "any" | "none";
      /**
       * Filters to join.
       */
      value?: Filter<T>[];
    };
