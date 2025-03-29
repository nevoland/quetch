[**quetch**](../README.md)

***

[quetch](../README.md) / Join

# Type Alias: Join\<T, Separator\>

> **Join**\<`T`, `Separator`\>: `T` *extends* readonly [infer I, `...(infer R)`] ? `I` *extends* `string` \| `number` ? `R` *extends* [] ? `I` : `R` *extends* `string`[] ? \`$\{I\}$\{Separator\}$\{Join\<R, Separator\>\}\` : `never` : `never` : `never`

## Type Parameters

• **T** *extends* `any`[]

• **Separator** *extends* `string` = `"."`

## Defined in

[lib/types/Join.ts:1](https://github.com/nevoland/quetch/blob/d3c3874b3b683738adb5be9e083a7d95e2758c83/lib/types/Join.ts#L1)
