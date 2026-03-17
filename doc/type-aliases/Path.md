[**quetch**](../README.md)

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: [`unknown`] *extends* [`T`] ? readonly ([`Key`](Key.md) \| `never`)[] : [`0`] *extends* [`1` & `T`] ? readonly ([`Key`](Key.md) \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* [`Primitive`](Primitive.md) ? readonly `never`[] : `T` *extends* infer P[] ? readonly [`number`] \| readonly [`number`, `...Path<P, Decrement<(...)>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]: readonly \[(...)\] \| readonly \[(...), (...)\] \}\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/Path.ts:6](https://github.com/nevoland/quetch/blob/11efc4791b6b46376df8dcc576f30e0b288063ba/lib/types/Path.ts#L6)
