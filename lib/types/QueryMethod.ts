import type { Query } from "./Query";

/**
 * Available query methods.
 */
export type QueryMethod = Exclude<Query<never>["method"], undefined>;
