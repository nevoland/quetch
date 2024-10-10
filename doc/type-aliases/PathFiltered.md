[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / PathFiltered

# Type Alias: PathFiltered\<T, P, D\>

> **PathFiltered**\<`T`, `P`, `D`\>: `D` *extends* `4` ? `never` : `T` *extends* infer I[] ? `I` *extends* `P` ? [`number`] : [`number`, `...PathFiltered<I, P, Increment<D>>`] : `T` *extends* `object` ? `{ [K in keyof T]-?: T[K] extends P ? [K] : [K, ...PathFiltered<T[K], P, Increment<D>>] }`\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **P**

• **D** = `0`

## Defined in

[lib/types/PathFiltered.ts:3](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/PathFiltered.ts#L3)
