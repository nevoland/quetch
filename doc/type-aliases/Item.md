[**quetch**](../README.md)

***

[quetch](../README.md) / Item

# Type Alias: Item\<T, S\>

> **Item**\<`T`, `S`\>: `T` *extends* infer I[] ? `I` : `T` *extends* `ReadonlyArray`\<infer I\> ? `I` : `S`

Returns the inferred item type of an array, or an alternative type if it is something else (e.g., `undefined`).

## Type Parameters

• **T**

• **S** = `undefined`

## Defined in

[lib/types/Item.ts:4](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/types/Item.ts#L4)
