[**quetch**](../README.md)

***

[quetch](../README.md) / QueryDelete

# Type Alias: QueryDelete\<T\>

> **QueryDelete**\<`T`\>: `object`

Query for deleting an item.

## Type Parameters

• **T**

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to delete the item.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

### method

> **method**: `"delete"`

### multiple?

> `optional` **multiple**: `false`

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

## Defined in

[lib/types/QueryDelete.ts:9](https://github.com/nevoland/quetch/blob/74684cd5cd1bd7a08980d4ce305ecc4be0c3e8b8/lib/types/QueryDelete.ts#L9)
