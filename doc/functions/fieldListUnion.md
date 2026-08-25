[**quetch**](../README.md)

***

[quetch](../README.md) / fieldListUnion

# Function: fieldListUnion()

> **fieldListUnion**\<`T`\>(`a`, `b`): `undefined` \| readonly [`Field`](../type-aliases/Field.md)\<`T`\>[]

Returns the union of two lists of fields, removing any duplicates.

## Type Parameters

• **T**

## Parameters

### a

`undefined` | readonly [`Field`](../type-aliases/Field.md)\<`T`\>[]

### b

`undefined` | readonly [`Field`](../type-aliases/Field.md)\<`T`\>[]

## Returns

`undefined` \| readonly [`Field`](../type-aliases/Field.md)\<`T`\>[]

The union of the two lists of fields, with duplicates removed.

## Defined in

[lib/tools/fieldListUnion.ts:12](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/tools/fieldListUnion.ts#L12)
