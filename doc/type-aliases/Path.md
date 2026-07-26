[**quetch**](../README.md)

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: [`unknown`] *extends* [`T`] ? readonly (`PropertyKey` \| `never`)[] : [`0`] *extends* [`1` & `T`] ? readonly (`PropertyKey` \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* [`Primitive`](Primitive.md) \| `undefined` ? readonly `never`[] : `T` *extends* infer P[] ? readonly [`number`] \| readonly [`number`, `...Path<P, Decrement<(...)>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]: readonly \[(...)\] \| readonly \[(...), (...)\] \}\[keyof `T`\] : `never`

Returns the type of paths that can be used to select fields from a value of type `T`, with an optional depth limit `D`.

## Type Parameters

• **T**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/Path.ts:8](https://github.com/nevoland/quetch/blob/852e493056419119d071edc6f41975a9efd727e3/lib/types/Path.ts#L8)
