import type { NextHandler } from "../types";

/**
 * Uncallable handler used to terminate a sequence of handlers combined with `combine`.
 */
export const cork = undefined as unknown as NextHandler<never, never>;
