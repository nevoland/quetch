import type { Handler, Key, Query, Result } from "../types";

import { cork } from "./cork.js";

/**
 * Returns a generic fetch function that has to be called like this:
 * ```ts
 * genericFetch<T>()(query)
 * ```
 *
 * @param handler The query handler.
 * @returns A curried generic fetch function.
 */
export function defineGenericFetch<K extends string>(
  handler: Handler<Query<any> & { type: Key | any[] }, any, never, never>,
) {
  // FIXME: Until https://github.com/microsoft/TypeScript/issues/26242 gets resolved, the fetcher needs to be curried
  function genericFetch<T>() {
    async function customFetch<const Q extends Query<T>>(
      query: Q & { type: K | T[] },
    ): Promise<Result<T, Q>> {
      return await handler(query as any, cork);
    }
    return customFetch;
  }
  return genericFetch;
}
