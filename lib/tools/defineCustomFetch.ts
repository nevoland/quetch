import type { Handler, Key, Query, Result } from "../types";

import { cork } from "./cork.js";

/**
 * Returns a custom fetch function that handles a `query`
 *
 * @param handler The query handler.
 * @returns A custom fetch function.
 */
export function defineCustomFetch<M extends Record<string, object>>(
  handler: Handler<Query<any> & { type: Key | any[] }, any, never, never>,
) {
  async function customFetch<
    K extends keyof M,
    T extends M[K],
    const Q extends Query<T>,
  >(query: Q & { type: K }): Promise<Result<T, Q>>;
  async function customFetch<T extends object, const Q extends Query<T>>(
    type: T[],
    query: Q,
  ): Promise<Result<T, Q>>;
  async function customFetch<
    K extends keyof M,
    T extends M[K] | object,
    const Q extends Query<T>,
  >(query: Q & { type: T[] | K }): Promise<Result<T, Q>> {
    return await handler(query as any, cork);
  }
  return customFetch;
}
