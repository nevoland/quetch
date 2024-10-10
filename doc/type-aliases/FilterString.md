[**quetch**](../README.md) • **Docs**

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

> **operator**: `"equal"` \| `"notEqual"` \| `"startWith"` \| `"endWith"` \| `"include"` \| `"greaterThan"` \| `"greaterThanOrEqual"` \| `"lowerThan"` \| `"lowerThanOrEqual"`

### options?

> `optional` **options**: `Intl.CollatorOptions`

## Type Parameters

• **T** *extends* `object`

## Defined in

[lib/types/FilterString.ts:8](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/FilterString.ts#L8)
