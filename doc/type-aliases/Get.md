[**quetch**](../README.md)

***

[quetch](../README.md) / Get

# Type Alias: Get\<T, P\>

> **Get**\<`T`, `P`\>: [`P`] *extends* [readonly [infer K, `...(infer R)`]] ? `K` *extends* keyof `T` ? `R` *extends* [`Path`](Path.md)\<`T`\[`K`\]\> ? [`Get`](Get.md)\<`T`\[`K`\], `R`\> : `T`\[`K`\] : `never` : [`P`] *extends* [keyof `T`] ? `T`\[`P`\] : `T`

Returns the type of the property at the specified `P` path.

## Type Parameters

• **T**

• **P**

## Defined in

[lib/types/Get.ts:6](https://github.com/nevoland/quetch/blob/9da567b909b330487e6cd515ad713dcc58d03ec9/lib/types/Get.ts#L6)
