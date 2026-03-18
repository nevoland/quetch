import type { Filter } from "./Filter";

/**
 * A filter that includes a field.
 */
export type FilterWithField<T> = Extract<Filter<T>, { field: any }>;
