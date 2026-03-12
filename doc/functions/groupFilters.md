[**quetch**](../README.md)

***

[quetch](../README.md) / groupFilters

# Function: groupFilters()

> **groupFilters**\<`T`\>(`operator`, ...`filters`): [`Filter`](../type-aliases/Filter.md)\<`T`\> \| `undefined`

Groups filters together with the specified operator.

If no filters are provided, returns `undefined` for `"all"` and `"any"`, and `{ operator: "none" }` for `"none"`.

If only one filter is provided, returns that filter directly for `"all"` and `"any"`, and wraps it in a `"none"` filter for `"none"`.

## Type Parameters

• **T**

## Parameters

### operator

`"any"` | `"none"` | `"all"`

### filters

...readonly (`undefined` \| [`Filter`](../type-aliases/Filter.md)\<`T`\>)[]

The filters to group together.

## Returns

[`Filter`](../type-aliases/Filter.md)\<`T`\> \| `undefined`

- A single filter representing the grouped filters, or `undefined` if no filters are provided and the operator is `"all"` or `"any"`.

## Defined in

[lib/tools/groupFilters.ts:16](https://github.com/nevoland/quetch/blob/439120295bc3ab3895611a5a04d7281d9d40fc45/lib/tools/groupFilters.ts#L16)
