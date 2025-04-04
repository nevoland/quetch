[**quetch**](../README.md)

***

[quetch](../README.md) / FilterStringMatch

# Type Alias: FilterStringMatch\<T\>

> **FilterStringMatch**\<`T`\>: `object` & [`Value`](Value.md)\<`T`, `string`\>

Checks if a given string field matches a given regular expression, the value being a raw regular expression string.

## Type declaration

### \[CACHE\]?

> `optional` **\[CACHE\]**: `RegExp`

Compiled regular expression generated by the `testFilter` function.

### field

> **field**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

### operator

> **operator**: `"match"` \| `"notMatch"`

### options?

> `optional` **options**: `object`

Regular expression options.

#### options.dotAll?

> `optional` **dotAll**: `boolean`

Allow `.` to match newlines.

#### options.ignoreCase?

> `optional` **ignoreCase**: `boolean`

Ignore casing differences if `true`.

## Type Parameters

• **T**

## Defined in

[lib/types/FilterStringMatch.ts:9](https://github.com/nevoland/quetch/blob/3b1cd3aac672a1a4d2ad52892d4fa09995f51627/lib/types/FilterStringMatch.ts#L9)
