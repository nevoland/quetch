import type { CustomFieldMap, Query } from "../types";

export function defineCheckQuery<Entities extends Record<string, object>>() {
  function checkQuery<
    E extends object,
    C extends CustomFieldMap<E>,
    const Q extends Query<E, C>,
  >(query: Q & { type: E[]; customFields?: C }): typeof query;
  function checkQuery<
    T extends keyof Entities,
    E extends Entities[T],
    C extends CustomFieldMap<E>,
    const Q extends Query<E, C>,
  >(query: Q & { type: T; customFields?: C }): typeof query;
  function checkQuery<
    T extends keyof Entities,
    E extends Entities[T] | object,
    C extends CustomFieldMap<E>,
    const Q extends Query<E, C>,
  >(query: Q & { type: T | E[]; customFields?: C }): typeof query {
    return query;
  }
  return checkQuery;
}
