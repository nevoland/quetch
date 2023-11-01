import type { CustomFieldAggregateMap } from "./CustomFieldAggregateMap";

/**
 * Specifies how items should be grouped.
 */
export type Group<T extends object> =
  | keyof T
  | {
      field: keyof T;
      customFields?: CustomFieldAggregateMap<T>;
    };
