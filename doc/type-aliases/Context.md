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

[lib/types/Context.ts:13](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/types/Context.ts#L13)
