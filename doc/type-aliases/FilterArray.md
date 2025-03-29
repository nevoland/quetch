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

[lib/types/FilterArray.ts:11](https://github.com/nevoland/quetch/blob/d3c3874b3b683738adb5be9e083a7d95e2758c83/lib/types/FilterArray.ts#L11)
