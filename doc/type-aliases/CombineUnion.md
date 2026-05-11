[**quetch**](../README.md)

***

[quetch](../README.md) / CombineUnion

# Type Alias: CombineUnion\<U\>

> **CombineUnion**\<`U`\>: [`unknown`] *extends* [`U`] ? `unknown` : [`0`] *extends* [`1` & `U`] ? `any` : [`U`] *extends* [`Function` \| readonly `Function`[]] ? `undefined` : [`U`] *extends* [[`Primitive`](Primitive.md) \| `undefined`] ? `U` : [`U`] *extends* readonly [`any`[]] ? `U` : `{ [K in KeyFromUnion<U>]: Continue<Combine<U, K>> }`

## Type Parameters

• **U**

## Defined in

[lib/types/CombineUnion.ts:4](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/CombineUnion.ts#L4)
