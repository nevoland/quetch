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

Filter for finding the item, if it cannot be found based on the `context`.

### limit?

> `optional` **limit**: `never`

### method

> **method**: `"delete"`

### multiple?

> `optional` **multiple**: `false`

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

[lib/types/QueryDelete.ts:9](https://github.com/nevoland/quetch/blob/1dbcbe5bf2276e5e4dfe5bc56d7adf82ee0d0a42/lib/types/QueryDelete.ts#L9)
