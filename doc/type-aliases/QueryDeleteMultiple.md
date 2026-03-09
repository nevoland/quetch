[**quetch**](../README.md)

***

[quetch](../README.md) / QueryDeleteMultiple

# Type Alias: QueryDeleteMultiple\<T\>

> **QueryDeleteMultiple**\<`T`\>: `object`

Query for deleting multiple items.

## Type Parameters

• **T**

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to delete the item.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

Filter for finding the items to delete.

### limit?

> `optional` **limit**: `number`

Upper bound of the number of items to delete.

### method

> **method**: `"delete"`

### multiple

> **multiple**: `true`

### offset?

> `optional` **offset**: `number`

Offset of the first matching item to delete.

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

## Defined in

[lib/types/QueryDeleteMultiple.ts:9](https://github.com/nevoland/quetch/blob/fe379c4b50ec8fa5471bc145281a4c5256d2f06b/lib/types/QueryDeleteMultiple.ts#L9)
