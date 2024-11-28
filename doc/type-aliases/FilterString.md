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

> **operator**: `"equal"` \| `"notEqual"` \| `"startWith"` \| `"endWith"` \| `"include"` \| `"greaterThan"` \| `"greaterThanOrEqual"` \| `"lowerThan"` \| `"lowerThanOrEqual"`

### options?

> `optional` **options**: `Intl.CollatorOptions`

## Type Parameters

• **T**

## Defined in

[lib/types/FilterString.ts:8](https://github.com/nevoland/quetch/blob/daab7d5db71d61e74901886a2473b07ec4e9fc05/lib/types/FilterString.ts#L8)
