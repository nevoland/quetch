[**quetch**](../README.md)

***

[quetch](../README.md) / Prettify

# Type Alias: Prettify\<T\>

> **Prettify**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* readonly `any`[] ? `T` : `{ [K in keyof T]: Prettify<T[K]> }`

Prettifies a type by recursively removing any intersections or unions.

## Type Parameters

• **T**

## Defined in

[lib/types/Prettify.ts:4](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/Prettify.ts#L4)
