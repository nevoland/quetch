import type { FieldFiltered } from "./FieldFiltered";
import type { Value } from "./Value";
import type { ValueOther } from "./ValueOther";

/**
 * Checks if a given number field matches a given number value according to a given operator.
 */
export type FilterNumber<T> =
  | ({
      operator:
        | "equal"
        | "notEqual"
        | "greaterThan"
        | "greaterThanOrEqual"
        | "lowerThan"
        | "lowerThanOrEqual";
      field: FieldFiltered<T, number>;
    } & Value<T, number>)
  | ({
      operator:
        | "between"
        | "notBetween"
        | "betweenOrEqual"
        | "notBetweenOrEqual";
      field: FieldFiltered<T, number>;
    } & Value<T, number> &
      ValueOther<T, number>);
