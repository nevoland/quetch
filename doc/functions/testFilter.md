[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / testFilter

# Function: testFilter()

> **testFilter**\<`T`\>(`filter`, `value`, `settings`?): `boolean`

Checks wether the provided `value` matches the `filter` or not.

## Type Parameters

• **T** *extends* `object`

## Parameters

• **filter**: `undefined` \| [`Filter`](../type-aliases/Filter.md)\<`T`\>

The filter to apply.

• **value**: `undefined` \| `T`

The value to check.

• **settings?**: [`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>

Optional query settings.

## Returns

`boolean`

`true` if the `value` matches the `filter` and `false` otherwise.

## Defined in

[lib/tools/testFilter.ts:28](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/tools/testFilter.ts#L28)
