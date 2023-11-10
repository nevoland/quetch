import type { CustomFieldMap, Handler, Key, Query, Result } from "../types";

import { cork } from "./cork.js";

export function defineGenericFetch<K extends string>(
  handler: Handler<
    Query<any, any> & { type: Key | any[]; customFields?: CustomFieldMap<any> },
    any,
    never,
    never
  >,
) {
  // FIXME: Until https://github.com/microsoft/TypeScript/issues/26242 gets resolved, the fetcher needs to be curried
  function genericFetch<T extends object>() {
    async function customFetch<const Q extends Query<T, undefined>>(
      query: Q & { type: K | T[]; customFields?: never },
    ): Promise<Result<T, Q, undefined>>;
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
      return await handler(query as any, cork);
    }
    return customFetch;
  }
  return genericFetch;
}
