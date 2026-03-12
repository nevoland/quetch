[**quetch**](../README.md)

***

[quetch](../README.md) / Join

# Type Alias: Join\<T, Separator\>

> **Join**\<`T`, `Separator`\>: `T` *extends* readonly [infer I, `...(infer R)`] ? `I` *extends* `string` \| `number` ? `R` *extends* [] ? `I` : `R` *extends* `string`[] ? \`$\{I\}$\{Separator\}$\{Join\<R, Separator\>\}\` : `never` : `never` : `never`

## Type Parameters

• **T** *extends* `any`[]

• **Separator** *extends* `string` = `"."`

## Defined in

[lib/types/Join.ts:1](https://github.com/nevoland/quetch/blob/113c92700ad416b9a1f93a34d9c9a5df2d593321/lib/types/Join.ts#L1)
