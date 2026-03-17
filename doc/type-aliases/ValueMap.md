[**quetch**](../README.md)

***

[quetch](../README.md) / ValueMap

# Type Alias: ValueMap\<T, V\>

> **ValueMap**\<`T`, `V`\>: `T` *extends* [`Primitive`](Primitive.md) ? `V` : `T` *extends* infer P[] ? `Record`\<`number`, [`ValueMap`](ValueMap.md)\<`P`, `V`\>\> : `T` *extends* `object` ? `{ [K in keyof T]?: ValueMap<T[K], V> }` : `never`

Maps the properties of the provided value `T` to a specific value `V`.

## Type Parameters

• **T**

• **V**

## Defined in

[lib/types/ValueMap.ts:6](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/types/ValueMap.ts#L6)
