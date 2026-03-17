[**quetch**](../README.md)

***

[quetch](../README.md) / sortItemList

# Function: sortItemList()

> **sortItemList**\<`T`\>(`orderList`, `value`, `settings`?): readonly `T`[]

Sorts provided `value` array according to the `orderList`.

## Type Parameters

• **T**

## Parameters

### orderList

`undefined` | `NoInfer`\<readonly [`Order`](../type-aliases/Order.md)\<`T`\>[]\>

### value

readonly `T`[]

The array to sort.

### settings?

[`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>

Optional query settings.

## Returns

readonly `T`[]

A new sorted array.

## Defined in

[lib/tools/sortItemList.ts:16](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/tools/sortItemList.ts#L16)
