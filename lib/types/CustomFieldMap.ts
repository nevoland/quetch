import type { FieldFunction } from "./FieldFunction";

export type CustomFieldMap<T> = Record<string, FieldFunction<T>>;
