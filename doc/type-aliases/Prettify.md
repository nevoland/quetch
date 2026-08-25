[**quetch**](../README.md)

***

[quetch](../README.md) / Prettify

# Type Alias: Prettify\<T\>

> **Prettify**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* readonly `any`[] ? `T` : `{ [K in keyof T]: Prettify<T[K]> }`

Prettifies a type by recursively removing any intersections or unions.

## Type Parameters

• **T**

## Defined in

[lib/types/Prettify.ts:4](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/types/Prettify.ts#L4)
