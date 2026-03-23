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

[lib/types/QueryDelete.ts:9](https://github.com/nevoland/quetch/blob/131557e11062ea669e329412a2b134052204e500/lib/types/QueryDelete.ts#L9)
