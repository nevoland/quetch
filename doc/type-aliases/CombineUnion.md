[**quetch**](../README.md)

***

[quetch](../README.md) / CombineUnion

# Type Alias: CombineUnion\<U\>

> **CombineUnion**\<`U`\>: [`0`] *extends* [`1` & `U`] ? `any` : [`U`] *extends* [`Function` \| readonly `Function`[]] ? `undefined` : [`U`] *extends* [[`Primitive`](Primitive.md)] ? `U` : [`U`] *extends* readonly [`any`[]] ? `U` : `{ [K in KeyFromUnion<U>]: Continue<Combine<U, K>> }`

## Type Parameters

• **U**

## Defined in

[lib/types/CombineUnion.ts:4](https://github.com/nevoland/quetch/blob/50090a7fe48ca3e8786e2d177c48636858557e1c/lib/types/CombineUnion.ts#L4)
