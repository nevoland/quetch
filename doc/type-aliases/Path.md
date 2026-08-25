[**quetch**](../README.md)

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: [`unknown`] *extends* [`T`] ? readonly (`PropertyKey` \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* [`Primitive`](Primitive.md) \| `undefined` ? readonly `never`[] : `T` *extends* infer P[] ? readonly [`number`] \| readonly [`number`, `...Path<P, Decrement<D>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]: readonly \[K\] \| readonly \[K, ...(...)\] \}\[keyof `T`\] : `never`

Returns the type of paths that can be used to select fields from a value of type `T`, with an optional depth limit `D`.

## Type Parameters

• **T**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/Path.ts:8](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/types/Path.ts#L8)
