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

[lib/types/FilterStringIntersect.ts:8](https://github.com/nevoland/quetch/blob/1dbcbe5bf2276e5e4dfe5bc56d7adf82ee0d0a42/lib/types/FilterStringIntersect.ts#L8)
