[**quetch**](../README.md)

***

[quetch](../README.md) / KeyFiltered

# Type Alias: KeyFiltered\<T, P\>

> **KeyFiltered**\<`T`, `P`\>: [`unknown`] *extends* [`T`] ? `PropertyKey` \| `SymbolSelf` : [`0`] *extends* [`1` & `T`] ? `PropertyKey` \| `SymbolSelf` : `T` *extends* `string` \| `number` \| `boolean` \| `bigint` \| `symbol` ? `T` *extends* `P` ? `SymbolSelf` : `never` : `T` *extends* `object` ? keyof `{ [K in keyof T as Extract<T[K], P> extends never ? never : K]-?: T[K] }` : `never`

Returns union of keys whose mapped value extend the provided `P` type.

## Type Parameters

• **T**

• **P**

## Defined in

[lib/types/KeyFiltered.ts:8](https://github.com/nevoland/quetch/blob/852e493056419119d071edc6f41975a9efd727e3/lib/types/KeyFiltered.ts#L8)
