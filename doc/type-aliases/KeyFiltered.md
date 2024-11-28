[**quetch**](../README.md)

***

[quetch](../README.md) / KeyFiltered

# Type Alias: KeyFiltered\<T, P\>

> **KeyFiltered**\<`T`, `P`\>: [`0`] *extends* [`1` & `T`] ? [`Key`](Key.md) \| `SymbolSelf` : `T` *extends* `string` \| `number` \| `boolean` \| `bigint` \| `symbol` ? `T` *extends* `P` ? `SymbolSelf` : `never` : `T` *extends* `object` ? keyof `{ [K in keyof T as Extract<T[K], P> extends never ? never : K]-?: T[K] }` : `never`

Returns union of keys whose mapped value extend the provided `P` type.

## Type Parameters

• **T**

• **P**

## Defined in

[lib/types/KeyFiltered.ts:10](https://github.com/nevoland/quetch/blob/74684cd5cd1bd7a08980d4ce305ecc4be0c3e8b8/lib/types/KeyFiltered.ts#L10)
