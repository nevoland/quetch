[**quetch**](../README.md)

***

[quetch](../README.md) / FilterStringIntersect

# Type Alias: FilterStringIntersect\<T\>

> **FilterStringIntersect**\<`T`\>: `object` & [`Value`](Value.md)\<`T`, readonly `string`[]\>

Checks if a given string field has any of the provided values.

## Type declaration

### field

> **field**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

### locale?

> `optional` **locale**: [`Locale`](Locale.md)

### operator

> **operator**: `"intersect"` \| `"notIntersect"`

### options?

> `optional` **options**: `Intl.CollatorOptions`

## Type Parameters

• **T**

## Defined in

[lib/types/FilterStringIntersect.ts:8](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/types/FilterStringIntersect.ts#L8)
