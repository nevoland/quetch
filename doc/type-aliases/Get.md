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

[lib/types/Get.ts:6](https://github.com/nevoland/quetch/blob/1dbcbe5bf2276e5e4dfe5bc56d7adf82ee0d0a42/lib/types/Get.ts#L6)
