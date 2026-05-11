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

[lib/types/Item.ts:4](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/Item.ts#L4)
