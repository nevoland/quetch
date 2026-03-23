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

[lib/types/FilterStringIntersect.ts:8](https://github.com/nevoland/quetch/blob/131557e11062ea669e329412a2b134052204e500/lib/types/FilterStringIntersect.ts#L8)
