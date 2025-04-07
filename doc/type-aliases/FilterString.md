[**quetch**](../README.md)

***

[quetch](../README.md) / FilterString

# Type Alias: FilterString\<T\>

> **FilterString**\<`T`\>: `object` & [`Value`](Value.md)\<`T`, `string`\>

Checks if a given string field matches a given string value according to a given operator.

## Type declaration

### field

> **field**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

### locale?

> `optional` **locale**: [`Locale`](Locale.md)

### operator

> **operator**: `"equal"` \| `"notEqual"` \| `"startWith"` \| `"notStartWith"` \| `"endWith"` \| `"notEndWith"` \| `"include"` \| `"greaterThan"` \| `"greaterThanOrEqual"` \| `"lowerThan"` \| `"lowerThanOrEqual"` \| `"between"` \| `"notBetween"` \| `"betweenOrEqual"` \| `"notBetweenOrEqual"`

### options?

> `optional` **options**: `Intl.CollatorOptions`

## Type Parameters

• **T**

## Defined in

[lib/types/FilterString.ts:8](https://github.com/nevoland/quetch/blob/5d54d23c7450a0f85309e15fdf3a25ea832b3452/lib/types/FilterString.ts#L8)
