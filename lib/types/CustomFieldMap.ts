import type { FieldFunction } from "./FieldFunction";

export type CustomFieldMap<T extends object> = Record<string, FieldFunction<T>>;
