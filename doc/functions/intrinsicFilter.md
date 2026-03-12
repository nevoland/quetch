[**quetch**](../README.md)

***

[quetch](../README.md) / intrinsicFilter

# Function: intrinsicFilter()

> **intrinsicFilter**\<`T`\>(`filter`, `settings`): [`IntrinsicFilter`](../type-aliases/IntrinsicFilter.md)\<`T`\>

Transforms a filter into an intrinsic filter by replacing `children` and `notChildren` filters with their transformed versions from the query settings.

## Type Parameters

• **T**

## Parameters

### filter

[`Filter`](../type-aliases/Filter.md)\<`T`\>

The filter to transform.

### settings

`Required`\<`Pick`\<[`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>, `"transformFilterChildren"`\>\>

The query settings that may contain a `transformFilterChildren` function to transform `children` and `notChildren` filters.

## Returns

[`IntrinsicFilter`](../type-aliases/IntrinsicFilter.md)\<`T`\>

The transformed intrinsic filter.

## Defined in

[lib/tools/intrinsicFilter.ts:10](https://github.com/nevoland/quetch/blob/f881c4f19d7899ff86da90e179fb6d9e199b8525/lib/tools/intrinsicFilter.ts#L10)
