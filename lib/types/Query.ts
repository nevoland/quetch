import type { QueryAggregate } from "./QueryAggregate";
import type { QueryCreate } from "./QueryCreate";
import type { QueryCreateMultiple } from "./QueryCreateMultiple";
import type { QueryDelete } from "./QueryDelete";
import type { QueryDeleteMultiple } from "./QueryDeleteMultiple";
import type { QueryRead } from "./QueryRead";
import type { QueryReadMultiple } from "./QueryReadMultiple";
import type { QueryUpdate } from "./QueryUpdate";
import type { QueryUpdateMultiple } from "./QueryUpdateMultiple";

/**
 * Query that fetches or mutates an entity.
 */
export type Query<
  /**
   * Type of the object item to be queried.
   */
  T extends object,
> =
  | QueryRead<T>
  | QueryReadMultiple<T>
  | QueryCreate<T>
  | QueryCreateMultiple<T>
  | QueryUpdate<T>
  | QueryUpdateMultiple<T>
  | QueryDelete<T>
  | QueryDeleteMultiple<T>
  | QueryAggregate<T>;
