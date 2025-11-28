[**quetch**](../README.md)

***

[quetch](../README.md) / QueryReadMultiple

# Type Alias: QueryReadMultiple\<T\>

> **QueryReadMultiple**\<`T`\>: `object`

Query for getting a list of items.

## Type Parameters

• **T**

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the item.

### fields?

> `optional` **fields**: readonly keyof `T`[]

Item fields to pick. If omitted, all fields are picked.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

Filter that picks the items.

### group?

> `optional` **group**: readonly [`Group`](Group.md)\<`T`\>[]

Groups items by specified fields.

### limit?

> `optional` **limit**: `number`

Upper bound of the number of items to return.

### method?

> `optional` **method**: `"read"`

### multiple

> **multiple**: `true`

### offset?

> `optional` **offset**: `number`

Offset of the first matching item.

### order?

> `optional` **order**: readonly [`Order`](Order.md)\<`T`\>[]

Order by which the items should be sorted.

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

## Defined in

[lib/types/QueryReadMultiple.ts:11](https://github.com/nevoland/quetch/blob/ac27bbd10371e5d511c6f132fbd86a55d2c14316/lib/types/QueryReadMultiple.ts#L11)
