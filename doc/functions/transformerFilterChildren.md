[**quetch**](../README.md)

***

[quetch](../README.md) / transformerFilterChildren

# Function: transformerFilterChildren()

> **transformerFilterChildren**\<`T`\>(`options`): (`filter`) => [`FilterStringMatch`](../type-aliases/FilterStringMatch.md)\<`T`\>

Returns a function that transforms a `FilterChildren` into a `FilterStringMatch`.

## Type Parameters

• **T**

## Parameters

### options

[`NormalizedPathFieldSettings`](../type-aliases/NormalizedPathFieldSettings.md)\<`T`\> = `EMPTY_OBJECT`

Options for the transformer.

## Returns

`Function`

A function that takes a `FilterChildren` and returns a `FilterStringMatch` that matches the paths of the children of the item specified in the `FilterChildren`.

### Parameters

#### filter

[`FilterChildren`](../type-aliases/FilterChildren.md)\<`T`\>

### Returns

[`FilterStringMatch`](../type-aliases/FilterStringMatch.md)\<`T`\>

## Defined in

[lib/tools/transformerFilterChildren.ts:19](https://github.com/nevoland/quetch/blob/11efc4791b6b46376df8dcc576f30e0b288063ba/lib/tools/transformerFilterChildren.ts#L19)
