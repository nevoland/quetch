import type { CustomFieldMap } from "./CustomFieldMap";
import type { Query } from "./Query";

export type CustomRequest<
  T extends object,
  Q extends Query<T, C>,
  C extends CustomFieldMap<T>,
> = {
  /**
   * Entity being queried.
   */
  data: T;
  /**
   * Query.
   */
  query: Q;
  /**
   * Abort signal to abort the request.
   */
  signal?: AbortSignal;
};
