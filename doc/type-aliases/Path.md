[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / Path

# Type Alias: Path\<T, D\>

> **Path**\<`T`, `D`\>: `D` *extends* `4` ? `never` : `T` *extends* infer P[] ? [`number`] \| [`number`, `...Path<P, Increment<D>>`] : `T` *extends* `object` ? \{ \[K in keyof T\]-?: \[K\] \| \[K, ...Path\<T\[K\], Increment\<D\>\>\] \}\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **D** = `0`

## Defined in

[lib/types/Path.ts:3](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/Path.ts#L3)
