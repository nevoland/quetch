import type { Handler } from "../types";

import { identity } from "./identity.js";

/**
 *  Dispatches an incoming query to `left` if `condition(query)` returns a truthy value, `right` otherwise. This is helpful for sending queries to different resolvers.
 *
 * @example
 * ```typescript
 * const customFetch = combine(
 *   branch(query => query.protocol === 'gql', gqlHandlers),
 *   restHandlers,
 * )
 * ```
 *
 * @param condition
 * @param left
 * @param right
 * @returns
 */
export function branch<I, O, In, On>(
  condition: (input: I) => boolean,
  left: Handler<I, O, In, On>,
  right: Handler<I, O, In, On> = identity as Handler<I, O, In, On>,
): Handler<I, O, In, On> {
  return (input, next) => (condition(input) ? left : right)(input, next);
}
