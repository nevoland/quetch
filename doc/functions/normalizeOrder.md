[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / normalizeOrder

# Function: normalizeOrder()

> **normalizeOrder**\<`T`\>(`order`): `object`

Returns a normalized order, which is an object with the `field` and `descending` properties.

## Type Parameters

• **T** *extends* `object`

## Parameters

• **order**: [`Order`](../type-aliases/Order.md)\<`T`\>

The string or order object.

## Returns

`object`

The normalized order object.

### descending?

> `optional` **descending**: `boolean`

### field

> **field**: [`Field`](../type-aliases/Field.md)\<`T`\>

## Defined in

[lib/tools/normalizeOrder.ts:11](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/tools/normalizeOrder.ts#L11)
