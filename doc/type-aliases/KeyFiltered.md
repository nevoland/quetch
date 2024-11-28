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

[lib/types/KeyFiltered.ts:10](https://github.com/nevoland/quetch/blob/6249acbaaaaaeed54f7d39c2e784b6176249eef9/lib/types/KeyFiltered.ts#L10)
