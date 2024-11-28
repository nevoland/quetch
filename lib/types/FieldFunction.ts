import type { FieldFunctionCustom } from "./FieldFunctionCustom";
import type { FieldFunctionFormatDate } from "./FieldFunctionFormatDate";

export type FieldFunction<T> =
  | FieldFunctionCustom<T>
  | FieldFunctionFormatDate<T>;
