[**quetch**](../README.md)

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: [`unknown`] *extends* [`T`] ? readonly ([`Key`](Key.md) \| `never`)[] : [`0`] *extends* [`1` & `T`] ? readonly ([`Key`](Key.md) \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* [`Primitive`](Primitive.md) \| `undefined` ? readonly `never`[] : `T` *extends* infer P[] ? readonly [`number`] \| readonly [`number`, `...Path<P, Decrement<(...)>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]: readonly \[(...)\] \| readonly \[(...), (...)\] \}\[keyof `T`\] : `never`

Returns the type of paths that can be used to select fields from a value of type `T`, with an optional depth limit `D`.

## Type Parameters

• **T**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/Path.ts:9](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/Path.ts#L9)
