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

[lib/types/KeyFiltered.ts:4](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/KeyFiltered.ts#L4)
