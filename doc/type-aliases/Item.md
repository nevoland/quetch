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

[lib/types/Item.ts:4](https://github.com/nevoland/quetch/blob/439120295bc3ab3895611a5a04d7281d9d40fc45/lib/types/Item.ts#L4)
