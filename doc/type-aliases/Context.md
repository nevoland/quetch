[**quetch**](../README.md)

***

[quetch](../README.md) / Context

# Type Alias: Context\<T\>

> **Context**\<`T`\>: [`0`] *extends* [`1` & `T`] ? `any` : `T` *extends* [`Primitive`](Primitive.md) ? `object` : `{ [K in keyof T]?: T[K] }`

## Type Parameters

• **T**

## Defined in

[lib/types/Context.ts:5](https://github.com/nevoland/quetch/blob/90f88a16e6d59a9c61398498a63289d526194476/lib/types/Context.ts#L5)
