import type { CustomFieldMap } from "./CustomFieldMap";
import type { Filter } from "./Filter";

/**
 * Query for deleting multiple items.
 */
export type QueryDeleteMultiple<T extends object> = {
  method: "delete";
  multiple: true;
  filter?: Filter<T>;
  customFields?: CustomFieldMap<T>;
};
