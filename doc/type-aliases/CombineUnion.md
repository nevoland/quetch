[**quetch**](../README.md)

***

[quetch](../README.md) / CombineUnion

# Type Alias: CombineUnion\<U\>

> **CombineUnion**\<`U`\>: [`0`] *extends* [`1` & `U`] ? `any` : [`unknown`] *extends* [`U`] ? `unknown` : [`U`] *extends* [`Function` \| readonly `Function`[]] ? `undefined` : [`U`] *extends* [[`Primitive`](Primitive.md) \| `undefined`] ? `U` : [`U`] *extends* readonly [`any`[]] ? `U` : `{ [K in KeyFromUnion<U>]: Continue<Combine<U, K>> }`

## Type Parameters

• **U**

## Defined in

[lib/types/CombineUnion.ts:4](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/types/CombineUnion.ts#L4)
