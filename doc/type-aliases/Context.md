[**quetch**](../README.md)

***

[quetch](../README.md) / Context

# Type Alias: Context\<T\>

> **Context**\<`T`\>: [`0`] *extends* [`1` & `T`] ? `any` : `T` *extends* [`Primitive`](Primitive.md) ? `object` : `{ [K in keyof T]?: T[K] }`

## Type Parameters

• **T**

## Defined in

[lib/types/Context.ts:5](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/types/Context.ts#L5)
