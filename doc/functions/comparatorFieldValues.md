[**quetch**](../README.md)

***

[quetch](../README.md) / comparatorFieldValues

# Function: comparatorFieldValues()

> **comparatorFieldValues**\<`T`\>(`options`): [`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>\[`"compareFieldValues"`\]

Returns a function that transforms a `FilterChildren` into a `FilterStringMatch`.

## Type Parameters

• **T**

## Parameters

### options

[`NormalizedPathFieldSettings`](../type-aliases/NormalizedPathFieldSettings.md)\<`T`\> = `EMPTY_OBJECT`

Options for the transformer.

## Returns

[`QuerySettings`](../type-aliases/QuerySettings.md)\<`T`\>\[`"compareFieldValues"`\]

A function that takes a `FilterChildren` and returns a `FilterStringMatch` that matches the paths of the children of the item specified in the `FilterChildren`.

## Defined in

[lib/tools/comparatorFieldValues.ts:18](https://github.com/nevoland/quetch/blob/26a6a149fc06ca974acb5d9f3e9fe2273dcb9969/lib/tools/comparatorFieldValues.ts#L18)
