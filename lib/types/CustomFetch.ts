import type { Query } from "./Query";
import type { Result } from "./Result";

export interface CustomFetch<T extends object> {
  <Q extends Query<T>>(query: Q): Promise<Result<T, Q>>;
}
