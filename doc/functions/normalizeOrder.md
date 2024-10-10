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

[lib/tools/normalizeOrder.ts:11](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/tools/normalizeOrder.ts#L11)
