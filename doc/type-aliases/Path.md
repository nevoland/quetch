[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: `D` *extends* `4` ? `never` : `T` *extends* infer P[] ? [`number`] \| [`number`, `...Path<P, Increment<D>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]-?: \[K\] \| \[K, ...Path\<T\[K\], Increment\<D\>\>\] \}\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **D** = `0`

## Defined in

[lib/types/Path.ts:3](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/Path.ts#L3)
