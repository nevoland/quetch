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

[lib/types/ValueMap.ts:6](https://github.com/nevoland/quetch/blob/d3c3874b3b683738adb5be9e083a7d95e2758c83/lib/types/ValueMap.ts#L6)
