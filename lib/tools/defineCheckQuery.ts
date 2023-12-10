import type { Query } from "../types";

/**
 * Returns a function that checks queries. This is useful to prevent the query to have its type being narrowed if declared outside of a custom fetcher function argument.
 *
 * @returns Function that checks queries.
 */
export function defineCheckQuery<M extends Record<string, object>>() {
  function checkQuery<T extends object, const Q extends Query<T>>(
    query: Q & { type: T[] },
  ): typeof query;
  function checkQuery<
    K extends keyof M,
    T extends M[K],
    const Q extends Query<T>,
  >(query: Q & { type: K }): typeof query;
  function checkQuery<
    K extends keyof M,
    T extends M[K] | object,
    const Q extends Query<T>,
  >(query: Q & { type: K | T[] }): typeof query {
    return query;
  }
  return checkQuery;
}
