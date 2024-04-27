import type { Path } from "./Path";

export type Field<T extends object> = keyof T | Path<T>;
