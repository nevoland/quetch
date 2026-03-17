[**quetch**](../README.md)

***

[quetch](../README.md) / Prettify

# Type Alias: Prettify\<T\>

> **Prettify**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* readonly `any`[] ? `T` : `{ [K in keyof T]: Prettify<T[K]> }`

Prettifies a type by recursively removing any intersections or unions.

## Type Parameters

• **T**

## Defined in

[lib/types/Prettify.ts:4](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/types/Prettify.ts#L4)
