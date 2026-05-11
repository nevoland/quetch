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

[lib/tools/fieldListUnion.ts:12](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/tools/fieldListUnion.ts#L12)
