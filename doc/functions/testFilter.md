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

`undefined` | `NoInfer`\<[`Filter`](../type-aliases/Filter.md)\<`T`\>\>

### value

`undefined` | `T`

### settings?

[`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>

Optional query settings.

## Returns

`boolean`

`true` if the `value` matches the `filter` and `false` otherwise.

## Defined in

[lib/tools/testFilter.ts:25](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/tools/testFilter.ts#L25)
