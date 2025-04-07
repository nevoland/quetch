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

[lib/types/Item.ts:4](https://github.com/nevoland/quetch/blob/5d54d23c7450a0f85309e15fdf3a25ea832b3452/lib/types/Item.ts#L4)
