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

[lib/types/Item.ts:4](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/types/Item.ts#L4)
