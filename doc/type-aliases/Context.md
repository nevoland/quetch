[**quetch**](../README.md)

***

[quetch](../README.md) / Context

# Type Alias: Context\<T\>

> **Context**\<`T`\>: [`0`] *extends* [`1` & `T`] ? `any` : `T` *extends* [`Primitive`](Primitive.md) ? `object` : `{ [K in keyof T]?: T[K] }`

## Type Parameters

• **T**

## Defined in

[lib/types/Context.ts:5](https://github.com/nevoland/quetch/blob/f881c4f19d7899ff86da90e179fb6d9e199b8525/lib/types/Context.ts#L5)
