[**quetch**](../README.md)

***

[quetch](../README.md) / Context

# Type Alias: Context\<T\>

> **Context**\<`T`\>: [`0`] *extends* [`1` & `T`] ? `any` : `T` *extends* [`Primitive`](Primitive.md) ? `object` : `{ [K in keyof T]?: T[K] }`

Describes the entity so that it can be identified or selected in a filter.

The context of a single item (`query.multiple` is `false`) is typically its identifier.
The context of a list of items (`query.multiple` is `true`) typically consists of common properties that reference the parent entity.

It can be a partial object of the type `T` or a primitive value wrapped in an object with the `SELF` key.

## Type Parameters

• **T**

## Defined in

[lib/types/Context.ts:13](https://github.com/nevoland/quetch/blob/94f546831241bf41f83cf97787b7e923c8cf7824/lib/types/Context.ts#L13)
