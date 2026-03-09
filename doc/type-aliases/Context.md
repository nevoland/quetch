[**quetch**](../README.md)

***

[quetch](../README.md) / Context

# Type Alias: Context\<T\>

> **Context**\<`T`\>: [`0`] *extends* [`1` & `T`] ? `any` : `T` *extends* [`Primitive`](Primitive.md) ? `object` : `{ [K in keyof T]?: T[K] }`

## Type Parameters

• **T**

## Defined in

[lib/types/Context.ts:5](https://github.com/nevoland/quetch/blob/75ee4a15f2f2b7e06491343419abee1d1c8ff78f/lib/types/Context.ts#L5)
