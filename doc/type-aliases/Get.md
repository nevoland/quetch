[**quetch**](../README.md)

***

[quetch](../README.md) / Get

# Type Alias: Get\<T, P, D\>

> **Get**\<`T`, `P`, `D`\>: [`unknown`] *extends* [`T`] ? `unknown` : [`0`] *extends* [`1` & `T`] ? `any` : `D` *extends* `-1` ? `any` : [`P`] *extends* [readonly [infer K, `...(infer R)`]] ? `K` *extends* keyof `T` ? `R` *extends* [`Path`](Path.md)\<`T`\[`K`\]\> ? [`Get`](Get.md)\<`T`\[`K`\], `R`, [`Decrement`](Decrement.md)\<`D`\>\> : `T`\[`K`\] : `never` : [`P`] *extends* [keyof `T`] ? `T`\[`P`\] : `T`

Returns the type of the property at the specified `P` path.

## Type Parameters

• **T**

• **P**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/Get.ts:8](https://github.com/nevoland/quetch/blob/b61dbca54473f80e71fa7a49ff56d6963b3a7e91/lib/types/Get.ts#L8)
