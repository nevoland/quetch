import type { Query } from "./Query";

/**
 * Available query methods.
 */
export type QueryMethod = Exclude<Query<never, never>["method"], undefined>;
