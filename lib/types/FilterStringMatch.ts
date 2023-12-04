import type { SymbolCache } from "../constants/SymbolCache";

import type { FilterKeys } from "./FilterKeys";

/**
 * Checks if a given string field matches a given regular expression.
 */
export type FilterStringMatch<T extends object> = {
  operator: "match";
  field: FilterKeys<T, string>;
  /**
   * Raw regular expression string.
   */
  value: string;
  /**
   * Regular expression options.
   */
  options?: {
    /**
     * When matching, casing differences are ignored.
     */
    ignoreCase?: boolean;
    /**
     * Allows . to match newlines.
     */
    dotAll?: boolean;
  };
  /**
   * Compiled regular expression generated by the `testFilter` function.
   */
  [SymbolCache]?: RegExp;
};
