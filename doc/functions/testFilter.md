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

[lib/tools/testFilter.ts:25](https://github.com/nevoland/quetch/blob/11efc4791b6b46376df8dcc576f30e0b288063ba/lib/tools/testFilter.ts#L25)
