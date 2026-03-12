[**quetch**](../README.md)

***

[quetch](../README.md) / InjectCustomFields

# Type Alias: InjectCustomFields\<T, C\>

> **InjectCustomFields**\<`T`, `C`\>: `C` *extends* [`CustomFieldMap`](CustomFieldMap.md)\<`T`\> ? \{ readonly \[K in keyof T \| keyof C\]: K extends keyof T ? T\[K\] : K extends keyof C ? C\[K\] extends FieldFunctionCustom\<T\> ? ReturnType\<C\[K\]\["value"\]\> : C\[K\]\["operator"\] extends keyof FieldFunctionReturn ? FieldFunctionReturn\[C\[K\]\["operator"\]\] : never : never \} : `T`

Injects the custom fields into the entity type.

## Type Parameters

• **T**

• **C** *extends* [`CustomFieldMap`](CustomFieldMap.md)\<`T`\> \| `undefined`

## Defined in

[lib/types/InjectCustomFields.ts:8](https://github.com/nevoland/quetch/blob/439120295bc3ab3895611a5a04d7281d9d40fc45/lib/types/InjectCustomFields.ts#L8)
