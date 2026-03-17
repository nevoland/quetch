[**quetch**](../README.md)

***

[quetch](../README.md) / intrinsicFilter

# Function: intrinsicFilter()

> **intrinsicFilter**\<`T`\>(`settings`, `filter`): [`IntrinsicFilter`](../type-aliases/IntrinsicFilter.md)\<`T`\>

Transforms a filter into an intrinsic filter by replacing `children` and `notChildren` filters with their transformed versions from the query settings.

## Type Parameters

• **T**

## Parameters

### settings

`Required`\<`Pick`\<[`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>, `"transformFilterChildren"`\>\>

The query settings that may contain a `transformFilterChildren` function to transform `children` and `notChildren` filters.

### filter

[`Filter`](../type-aliases/Filter.md)\<`T`\>

The filter to transform.

## Returns

[`IntrinsicFilter`](../type-aliases/IntrinsicFilter.md)\<`T`\>

The transformed intrinsic filter.

## Defined in

[lib/tools/intrinsicFilter.ts:10](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/tools/intrinsicFilter.ts#L10)
