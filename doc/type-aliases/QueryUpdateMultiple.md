[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QueryUpdateMultiple

# Type Alias: QueryUpdateMultiple\<T\>

> **QueryUpdateMultiple**\<`T`\>: `object`

Query for updating multiple items.

## Type Parameters

• **T** *extends* `object`

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

> **value**: `Partial`\<`T`\>[]

Partial property values to update.

## Defined in

[lib/types/QueryUpdateMultiple.ts:10](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/QueryUpdateMultiple.ts#L10)
