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

[lib/types/PathFiltered.ts:3](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/PathFiltered.ts#L3)
