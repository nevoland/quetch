import type { Context } from "./Context";
import type { CustomFieldMap } from "./CustomFieldMap";
import type { InjectCustomFields } from "./InjectCustomFields";
import type { QueryAggregate } from "./QueryAggregate";
import type { QueryCreate } from "./QueryCreate";
import type { QueryCreateMultiple } from "./QueryCreateMultiple";
import type { QueryDelete } from "./QueryDelete";
import type { QueryDeleteMultiple } from "./QueryDeleteMultiple";
import type { QueryRead } from "./QueryRead";
import type { QueryReadMultiple } from "./QueryReadMultiple";
import type { QueryUpdate } from "./QueryUpdate";
import type { QueryUpdateMultiple } from "./QueryUpdateMultiple";

type QueryBase<T extends object> =
  | QueryRead<T>
  | QueryReadMultiple<T>
  | QueryCreate<T>
  | QueryCreateMultiple<T>
  | QueryUpdate<T>
  | QueryUpdateMultiple<T>
  | QueryDelete<T>
  | QueryDeleteMultiple<T>
  | QueryAggregate<T>;

/**
 * Query that fetches or mutates an entity.
 */
export type Query<
  T extends object,
  C extends CustomFieldMap<T> | undefined,
> = QueryBase<InjectCustomFields<T, C>> & {
  /**
   * Common item properties to use for identifying the item.
   */
  context?: Context<T>;
};
