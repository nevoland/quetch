[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / FilterStringIntersect

# Type Alias: FilterStringIntersect\<T\>

> **FilterStringIntersect**\<`T`\>: `object` & [`Value`](Value.md)\<`T`, `string`[]\>

Checks if a given string field has any of the provided values.

## Type declaration

### field

> **field**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

### locale?

> `optional` **locale**: [`Locale`](Locale.md)

### operator

> **operator**: `"intersect"`

### options?

> `optional` **options**: `Intl.CollatorOptions`

## Type Parameters

• **T** *extends* `object`

## Defined in

[lib/types/FilterStringIntersect.ts:8](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/FilterStringIntersect.ts#L8)
