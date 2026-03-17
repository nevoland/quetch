[**quetch**](../README.md)

***

[quetch](../README.md) / CombineUnion

# Type Alias: CombineUnion\<U\>

> **CombineUnion**\<`U`\>: [`unknown`] *extends* [`U`] ? `unknown` : [`0`] *extends* [`1` & `U`] ? `any` : [`U`] *extends* [`Function` \| readonly `Function`[]] ? `undefined` : [`U`] *extends* [[`Primitive`](Primitive.md)] ? `U` : [`U`] *extends* readonly [`any`[]] ? `U` : `{ [K in KeyFromUnion<U>]: Continue<Combine<U, K>> }`

## Type Parameters

• **U**

## Defined in

[lib/types/CombineUnion.ts:4](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/types/CombineUnion.ts#L4)
