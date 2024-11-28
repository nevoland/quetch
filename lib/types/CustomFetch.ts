import type { Query } from "./Query";
import type { Result } from "./Result";

export interface CustomFetch<T> {
  <Q extends Query<T>>(query: Q): Promise<Result<T, Q>>;
}
