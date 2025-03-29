[**quetch**](../README.md)

***

[quetch](../README.md) / QueryUpdateMultiple

# Type Alias: QueryUpdateMultiple\<T\>

> **QueryUpdateMultiple**\<`T`\>: `object`

Query for updating multiple items.

## Type Parameters

• **T**

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to update the item.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

### limit?

> `optional` **limit**: `number`

Sets the upper bound of the number of items to update.

### method

> **method**: `"update"`

### multiple

> **multiple**: `true`

### offset?

> `optional` **offset**: `number`

Offset of the first matching item to update.

### order?

> `optional` **order**: [`Order`](Order.md)\<`T`\>[]

Order by which the items should be sorted.

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

### value

> **value**: readonly `Partial`\<`T`\>[]

Partial property values to update.

## Defined in

[lib/types/QueryUpdateMultiple.ts:10](https://github.com/nevoland/quetch/blob/3b1cd3aac672a1a4d2ad52892d4fa09995f51627/lib/types/QueryUpdateMultiple.ts#L10)
