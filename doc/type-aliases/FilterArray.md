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

[lib/types/FilterArray.ts:11](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/types/FilterArray.ts#L11)
