[**quetch**](../README.md)

***

[quetch](../README.md) / Join

# Type Alias: Join\<T, Separator\>

> **Join**\<`T`, `Separator`\>: `T` *extends* readonly [infer I, `...(infer R)`] ? `I` *extends* `string` \| `number` ? `R` *extends* [] ? `I` : `R` *extends* `string`[] ? \`$\{I\}$\{Separator\}$\{Join\<R, Separator\>\}\` : `never` : `never` : `never`

## Type Parameters

• **T** *extends* `any`[]

• **Separator** *extends* `string` = `"."`

## Defined in

[lib/types/Join.ts:1](https://github.com/nevoland/quetch/blob/9da567b909b330487e6cd515ad713dcc58d03ec9/lib/types/Join.ts#L1)
