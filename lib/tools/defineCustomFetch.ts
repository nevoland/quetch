import type { CustomFieldMap, Handler, Key, Query, Result } from "../types";

import { cork } from "./cork.js";

/**
 *
 *
 * @param handler
 * @returns
 */
export function defineCustomFetch<M extends Record<string, object>>(
  handler: Handler<
    Query<any, any> & { type: Key | any[]; customFields?: CustomFieldMap<any> },
    any,
    never,
    never
  >,
) {
  async function customFetch<
    K extends keyof M,
    T extends M[K],
    const Q extends Query<T, {}>,
  >(query: Q & { type: K; customFields?: never }): Promise<Result<T, Q, {}>>;
  async function customFetch<
    K extends keyof M,
    T extends M[K],
    const Q extends Query<T, C>,
    const C extends CustomFieldMap<T>,
  >(query: Q & { type: K; customFields: C }): Promise<Result<T, Q, C>>;
  async function customFetch<T extends object, const Q extends Query<T, {}>>(
    type: T[],
    query: Q & { customFields?: never },
  ): Promise<Result<T, Q, {}>>;
  async function customFetch<
    T extends object,
    const Q extends Query<T, C>,
    const C extends CustomFieldMap<T>,
  >(query: Q & { type: T[]; customFields: C }): Promise<Result<T, Q, C>>;
  async function customFetch<
    K extends keyof M,
    T extends M[K] | object,
    const Q extends Query<T, C>,
    const C extends CustomFieldMap<T>,
  >(query: Q & { type: T[] | K; customFields?: C }): Promise<Result<T, Q, C>> {
    return await handler(query, cork);
  }
  return customFetch;
}
