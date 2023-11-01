import type { CustomFieldMap, Query } from "../types";

/**
 * Returns a function that checks queries. This is useful to prevent the query to have its type being narrowed if declared outside of a custom fetcher function argument.
 *
 * @returns Function that checks queries.
 */
export function defineCheckQuery<M extends Record<string, object>>() {
  function checkQuery<
    T extends object,
    C extends CustomFieldMap<T>,
    const Q extends Query<T, C>,
  >(query: Q & { type: T[]; customFields?: C }): typeof query;
  function checkQuery<
    K extends keyof M,
    T extends M[K],
    C extends CustomFieldMap<T>,
    const Q extends Query<T, C>,
  >(query: Q & { type: K; customFields?: C }): typeof query;
  function checkQuery<
    K extends keyof M,
    T extends M[K] | object,
    C extends CustomFieldMap<T>,
    const Q extends Query<T, C>,
  >(query: Q & { type: K | T[]; customFields?: C }): typeof query {
    return query;
  }
  return checkQuery;
}
