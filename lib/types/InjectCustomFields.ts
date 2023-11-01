import type { CustomFieldMap } from "./CustomFieldMap";
import type { FieldFunctionCustom } from "./FieldFunctionCustom";
import type { FieldFunctionReturn } from "./FieldFunctionReturn";

/**
 * Injects the custom fields into the entity type.
 */
export type InjectCustomFields<
  T extends object,
  C extends CustomFieldMap<T> | undefined,
> = C extends CustomFieldMap<T>
  ? {
      readonly [K in keyof T | keyof C]: K extends keyof T
        ? T[K]
        : K extends keyof C
        ? C[K] extends FieldFunctionCustom<T>
          ? ReturnType<C[K]["value"]>
          : C[K]["operator"] extends keyof FieldFunctionReturn
          ? FieldFunctionReturn[C[K]["operator"]]
          : never
        : never;
    }
  : T;
