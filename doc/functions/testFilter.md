[**quetch**](../README.md)

***

[quetch](../README.md) / testFilter

# Function: testFilter()

> **testFilter**\<`T`\>(`filter`, `value`, `settings`?): `boolean`

Checks wether the provided `value` matches the `filter` or not.

## Type Parameters

• **T**

## Parameters

### filter

`undefined` | [`Filter`](../type-aliases/Filter.md)\<`T`\>

### value

`undefined` | `T`

### settings?

[`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>

Optional query settings.

## Returns

`boolean`

`true` if the `value` matches the `filter` and `false` otherwise.

## Defined in

[lib/tools/testFilter.ts:35](https://github.com/nevoland/quetch/blob/78e51f8989e150bad7c9687ad573f6d1f074683e/lib/tools/testFilter.ts#L35)
