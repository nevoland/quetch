import type { CustomFieldMap } from "./CustomFieldMap";
import type { Key } from "./Key";
import type { Query } from "./Query";

export type QueryAny = Query<any, any> & {
  type: Key | any[];
  customFields?: CustomFieldMap<any>;
};
