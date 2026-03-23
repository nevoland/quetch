[**quetch**](../README.md)

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: [`unknown`] *extends* [`T`] ? readonly ([`Key`](Key.md) \| `never`)[] : [`0`] *extends* [`1` & `T`] ? readonly ([`Key`](Key.md) \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* [`Primitive`](Primitive.md) ? readonly `never`[] : `T` *extends* infer P[] ? readonly [`number`] \| readonly [`number`, `...Path<P, Decrement<(...)>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]: readonly \[(...)\] \| readonly \[(...), (...)\] \}\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/Path.ts:6](https://github.com/nevoland/quetch/blob/131557e11062ea669e329412a2b134052204e500/lib/types/Path.ts#L6)
