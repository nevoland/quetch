import type { Normalized } from "./Normalized";
import type { Path } from "./Path";

export type Field<T> = T extends object
  ? keyof Normalized<T> | Path<Normalized<T>>
  : never;
