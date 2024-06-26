import type { SymbolCache } from "../constants/SymbolCache";

import type { FieldFiltered } from "./FieldFiltered";
import type { Value } from "./Value";

/**
 * Checks if a given string field matches a given regular expression, the value being a raw regular expression string.
 */
export type FilterStringMatch<T extends object> = {
  operator: "match";
  field: FieldFiltered<T, string>;
  /**
   * Regular expression options.
   */
  options?: {
    /**
     * Ignore casing differences if `true`.
     */
    ignoreCase?: boolean;
    /**
     * Allow `.` to match newlines.
     */
    dotAll?: boolean;
  };
  /**
   * Compiled regular expression generated by the `testFilter` function.
   */
  [SymbolCache]?: RegExp;
} & Value<T, string>;
