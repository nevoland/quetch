[**quetch**](../README.md)

***

[quetch](../README.md) / ValueMap

# Type Alias: ValueMap\<T, V\>

> **ValueMap**\<`T`, `V`\>: [`unknown`] *extends* [`T`] ? `V` : `T` *extends* [`Primitive`](Primitive.md) ? `V` : `T` *extends* infer P[] ? `Record`\<`number`, [`ValueMap`](ValueMap.md)\<`P`, `V`\>\> : `T` *extends* `object` ? `{ [K in keyof T]?: ValueMap<T[K], V> }` : `never`

Maps the properties of the provided value `T` to a specific value `V`.

## Type Parameters

• **T**

• **V**

## Defined in

[lib/types/ValueMap.ts:6](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/ValueMap.ts#L6)
