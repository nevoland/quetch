/**
 * Handles an `input` query and returns an `output` promise.
 */
export type NextHandler<I, R> = (input: I) => Promise<R>;
