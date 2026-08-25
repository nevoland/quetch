[**quetch**](../README.md)

***

[quetch](../README.md) / KeyFiltered

# Type Alias: KeyFiltered\<T, P\>

> **KeyFiltered**\<`T`, `P`\>: [`unknown`] *extends* [`T`] ? `PropertyKey` \| `SymbolSelf` : `T` *extends* `string` \| `number` \| `boolean` \| `bigint` \| `symbol` ? `T` *extends* `P` ? `SymbolSelf` : `never` : `T` *extends* `object` ? keyof `{ [K in keyof T as Extract<T[K], P> extends never ? never : K]-?: T[K] }` : `never`

Returns union of keys whose mapped value extend the provided `P` type.

## Type Parameters

• **T**

• **P**

## Defined in

[lib/types/KeyFiltered.ts:8](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/types/KeyFiltered.ts#L8)
