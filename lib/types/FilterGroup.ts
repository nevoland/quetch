import type { Filter } from "./Filter";

/**
 * Joins a list of filters with a specific boolean operator.
 */
export type FilterGroup<T> =
  | {
      /**
       * Checks if all filters are true.
       */
      operator: "all";
      /**
       * Filters to join.
       */
      value: readonly Filter<T>[];
    }
  | {
      /**
       * Checks if at least one of the filters match.
       * Always true if no filters are provided.
       */
      operator: "any";
      /**
       * Filters to join.
       */
      value?: readonly Filter<T>[];
      /**
       * Minimum number of filters that must match.
       *
       * @default `1` if filters are provided, `0` otherwise
       */
      minimum?: number;
      /**
       * Maximum number of filters that can match.
       *
       * @default Infinity
       */
      maximum?: number;
    }
  | {
      /**
       * Checks if none of the filters match.
       * Always false if no filters are provided.
       */
      operator: "none";
      /**
       * Filters to join.
       */
      value?: readonly Filter<T>[];
    };
