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

[lib/tools/fieldListUnion.ts:12](https://github.com/nevoland/quetch/blob/26a6a149fc06ca974acb5d9f3e9fe2273dcb9969/lib/tools/fieldListUnion.ts#L12)
