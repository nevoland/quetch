[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / Get

# Type Alias: Get\<T, P\>

> **Get**\<`T`, `P`\>: [`P`] *extends* [[infer K, `...(infer R)`]] ? `K` *extends* keyof `T` ? `R` *extends* [`Path`](Path.md)\<`T`\[`K`\]\> ? [`Get`](Get.md)\<`T`\[`K`\], `R`\> : `T`\[`K`\] : `never` : [`P`] *extends* [keyof `T`] ? `T`\[`P`\] : `T`

Returns the type of the property at the specified `P` path.

## Type Parameters

• **T**

• **P**

## Defined in

[lib/types/Get.ts:6](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/Get.ts#L6)
