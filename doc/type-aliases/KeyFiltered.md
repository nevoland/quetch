[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / KeyFiltered

# Type Alias: KeyFiltered\<T, P\>

> **KeyFiltered**\<`T`, `P`\>: keyof `T` & keyof `{ [K in keyof T as T[K] extends P ? K : never]-?: T[K] }`

Returns object type with field extending the provided `P` type.

## Type Parameters

• **T** *extends* `object`

• **P**

## Defined in

[lib/types/KeyFiltered.ts:4](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/KeyFiltered.ts#L4)
