import type { CustomFieldMap } from "./CustomFieldMap";
import type { Query } from "./Query";
import type { Result } from "./Result";

export interface GenericFetch<T extends object> {
  <Q extends Query<T, {}>>(
    query: Q & { customFields?: never },
  ): Promise<Result<T, Q, {}>>;
  <Q extends Query<T, C>, C extends CustomFieldMap<T>>(
    query: Q & { customFields: C },
  ): Promise<Result<T, Q, C>>;
}
