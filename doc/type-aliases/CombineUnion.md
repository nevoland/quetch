[**quetch**](../README.md)

***

[quetch](../README.md) / CombineUnion

# Type Alias: CombineUnion\<U\>

> **CombineUnion**\<`U`\>: [`unknown`] *extends* [`U`] ? `unknown` : [`0`] *extends* [`1` & `U`] ? `any` : [`U`] *extends* [`Function` \| readonly `Function`[]] ? `undefined` : [`U`] *extends* [[`Primitive`](Primitive.md)] ? `U` : [`U`] *extends* readonly [`any`[]] ? `U` : `{ [K in KeyFromUnion<U>]: Continue<Combine<U, K>> }`

## Type Parameters

• **U**

## Defined in

[lib/types/CombineUnion.ts:4](https://github.com/nevoland/quetch/blob/11efc4791b6b46376df8dcc576f30e0b288063ba/lib/types/CombineUnion.ts#L4)
