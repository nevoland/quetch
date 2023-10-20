import type {
  AnyQuery,
  CustomFieldMap,
  EntityItem,
  Handler,
  Query,
} from "../types";

import { impasse } from "./impasse";

export function defineCustomFetch<M extends Record<string, object>>(
  handler: Handler<AnyQuery, any, never, never>,
) {
  function customFetch<
    E extends object,
    C extends CustomFieldMap<E>,
    const Q extends Query<E, C>,
  >(
    input: Q & { type: E[]; customFields?: C },
  ): Promise<
    Q["method"] extends "get"
      ? Q extends { multiple: true }
        ? EntityItem<E, C, Q>[]
        : EntityItem<E, C, Q>
      : Q["method"] extends "aggregate"
      ? number
      : Q extends { multiple: true }
      ? EntityItem<E, C, Q>[]
      : EntityItem<E, C, Q>
  >;
  function customFetch<
    T extends keyof M,
    E extends M[T],
    C extends CustomFieldMap<E>,
    const Q extends Query<E, C>,
  >(
    input: Q & { type: T; customFields?: C },
  ): Promise<
    Q["method"] extends "get"
      ? Q extends { multiple: true }
        ? EntityItem<E, C, Q>[]
        : EntityItem<E, C, Q>
      : Q["method"] extends "aggregate"
      ? number
      : Q extends { multiple: true }
      ? EntityItem<E, C, Q>[]
      : EntityItem<E, C, Q>
  >;
  async function customFetch<
    T extends keyof M,
    E extends M[T] | object,
    C extends CustomFieldMap<E>,
    const Q extends Query<E, C>,
  >(
    input: Q & { type: T | E[]; customFields?: C },
  ): Promise<
    Q["method"] extends "get"
      ? Q extends { multiple: true }
        ? EntityItem<E, C, Q>[]
        : EntityItem<E, C, Q>
      : Q["method"] extends "aggregate"
      ? number
      : Q extends { multiple: true }
      ? EntityItem<E, C, Q>[]
      : EntityItem<E, C, Q>
  > {
    return await handler(input, impasse);
  }
  return customFetch;
}
