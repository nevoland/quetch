[**quetch**](../README.md)

***

[quetch](../README.md) / FilterArray

# Type Alias: FilterArray\<T, P\>

> **FilterArray**\<`T`, `P`\>: `object` & [`Value`](Value.md)\<`T`, `P`[]\>

Checks if a given array field matches a given array value according to a given operator:

- `equal` matches the exact content of the array.
- `include` requires every value to be present in the array.
- `intersect` requires at least one item of the value to be present in the array.

## Type declaration

### field

> **field**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `P`[]\>

### operator

> **operator**: `"equal"` \| `"include"` \| `"intersect"` \| `"notEqual"` \| `"notInclude"` \| `"notIntersect"`

## Type Parameters

• **T**

• **P** = `any`

## Defined in

[lib/types/FilterArray.ts:11](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/types/FilterArray.ts#L11)
