import type { Filter } from "./Filter";
import type { FilterChildren } from "./FilterChildren";
import type { FilterKeys } from "./FilterKeys";

export type QuerySettings<T extends object> = {
  pathFieldSeparator?: string;
  pathFieldKey?: FilterKeys<T, string>;
  transformFilterChildren?: (filter: FilterChildren<T>) => Filter<T>;
};
