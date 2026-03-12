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

[lib/types/ValueMap.ts:6](https://github.com/nevoland/quetch/blob/113c92700ad416b9a1f93a34d9c9a5df2d593321/lib/types/ValueMap.ts#L6)
