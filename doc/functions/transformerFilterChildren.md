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

`TransformerFilterChildrenOptions`\<`T`\> = `EMPTY_OBJECT`

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

[lib/tools/transformerFilterChildren.ts:39](https://github.com/nevoland/quetch/blob/94f546831241bf41f83cf97787b7e923c8cf7824/lib/tools/transformerFilterChildren.ts#L39)
