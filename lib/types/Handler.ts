import type { NextHandler } from "./NextHandler";

/**
 * Handles an `input` query and returns an `output` promise, eventually using the `next` handler.
 */
export type Handler<I, O, NI, No> = (
  input: I,
  next: NextHandler<NI, No>,
) => Promise<O>;
