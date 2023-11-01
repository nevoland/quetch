import type { CustomFieldMap } from "./CustomFieldMap";
import type { Filter } from "./Filter";

/**
 * Query for deleting an item.
 */
export type QueryDelete<T extends object> = {
  method: "delete";
  filter?: Filter<T>;
  customFields?: CustomFieldMap<T>;
};
