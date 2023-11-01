import type { CustomFieldMap, Handler, Key, Query, Result } from "../types";

import { cork } from "./cork";

export function defineGenericFetch<K extends string>(
  handler: Handler<
    Query<any, any> & { type: Key | any[]; customFields?: CustomFieldMap<any> },
    any,
    never,
    never
  >,
) {
  function genericFetch<T extends object>() {
    async function customFetch<const Q extends Query<T, {}>>(
      query: Q & { type: K | T[]; customFields?: never },
    ): Promise<Result<T, Q, {}>>;
    async function customFetch<
      const Q extends Query<T, C>,
      const C extends CustomFieldMap<T>,
    >(query: Q & { type: K | T[]; customFields: C }): Promise<Result<T, Q, C>>;
    async function customFetch<
      const Q extends Query<T, C>,
      const C extends CustomFieldMap<T>,
    >(
      query: Q & { type: K | T[]; customFields?: C },
    ): Promise<Result<T, Q, C>> {
      return await handler(query, cork);
    }
    return customFetch;
  }
  return genericFetch;
}
