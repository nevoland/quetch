[**quetch**](../README.md)

***

[quetch](../README.md) / filterChildren

# Function: filterChildren()

> **filterChildren**\<`T`\>(`parentPath`, `pathFieldKey`, `minDepth`, `maxDepth`, `pathSeparator`, `not`): [`FilterStringMatch`](../type-aliases/FilterStringMatch.md)\<`T`\>

Generates a filter that matches items whose path field indicates they are children of a given parent path, with an optional depth range.

## Type Parameters

• **T**

## Parameters

### parentPath

`string`

The path of the parent item.

### pathFieldKey

[`FieldFiltered`](../type-aliases/FieldFiltered.md)\<`T`, `string`\>

The key of the field that contains the path information.

### minDepth

`number` = `1`

The minimum depth of the child items relative to the parent.

### maxDepth

`number` = `Infinity`

The maximum depth of the child items relative to the parent.

### pathSeparator

`string` = `"/"`

The character used to separate path segments.

### not

`boolean` = `false`

If true, generates a filter that matches items that are not children of the given parent path.

## Returns

[`FilterStringMatch`](../type-aliases/FilterStringMatch.md)\<`T`\>

A filter that can be used to match child items.

## Defined in

[lib/tools/filterChildren.ts:16](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/tools/filterChildren.ts#L16)
