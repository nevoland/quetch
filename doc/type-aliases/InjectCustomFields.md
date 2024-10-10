[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / InjectCustomFields

# Type Alias: InjectCustomFields\<T, C\>

> **InjectCustomFields**\<`T`, `C`\>: `C` *extends* [`CustomFieldMap`](CustomFieldMap.md)\<`T`\> ? \{ readonly \[K in keyof T \| keyof C\]: K extends keyof T ? T\[K\] : K extends keyof C ? C\[K\] extends FieldFunctionCustom\<T\> ? ReturnType\<C\[K\]\["value"\]\> : C\[K\]\["operator"\] extends keyof FieldFunctionReturn ? FieldFunctionReturn\[C\[K\]\["operator"\]\] : never : never \} : `T`

Injects the custom fields into the entity type.

## Type Parameters

• **T** *extends* `object`

• **C** *extends* [`CustomFieldMap`](CustomFieldMap.md)\<`T`\> \| `undefined`

## Defined in

[lib/types/InjectCustomFields.ts:8](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/InjectCustomFields.ts#L8)
