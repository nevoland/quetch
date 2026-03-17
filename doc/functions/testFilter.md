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

[lib/tools/testFilter.ts:25](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/tools/testFilter.ts#L25)
