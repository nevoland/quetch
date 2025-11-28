[**quetch**](../README.md)

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: [`0`] *extends* [`1` & `T`] ? readonly ([`Key`](Key.md) \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* [`Primitive`](Primitive.md) ? readonly `never`[] : `T` *extends* infer P[] ? readonly [`number`] \| readonly [`number`, `...Path<P, Increment<D>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]: readonly \[K\] \| readonly \[K, ...(...)\] \}\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **D** = `7`

## Defined in

[lib/types/Path.ts:5](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/types/Path.ts#L5)
