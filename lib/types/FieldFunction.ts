import type { FieldFunctionCustom } from "./FieldFunctionCustom";
import type { FieldFunctionFormatDate } from "./FieldFunctionFormatDate";

export type FieldFunction<T extends object> =
  | FieldFunctionCustom<T>
  | FieldFunctionFormatDate<T>;
