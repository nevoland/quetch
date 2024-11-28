[**quetch**](../README.md)

***

[quetch](../README.md) / QueryUpdate

# Type Alias: QueryUpdate\<T\>

> **QueryUpdate**\<`T`\>: `object`

Query for updating an item.

## Type Parameters

• **T**

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to update the item.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

Filter for finding the item, if it cannot be found based on the `context`.

### group?

> `optional` **group**: `never`

### method

> **method**: `"update"`

### multiple?

> `optional` **multiple**: `false`

### offset?

> `optional` **offset**: `never`

### order

> **order**: `never`

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

### value

> **value**: `Partial`\<`T`\>

Partial property values to update.

## Defined in

[lib/types/QueryUpdate.ts:9](https://github.com/nevoland/quetch/blob/daab7d5db71d61e74901886a2473b07ec4e9fc05/lib/types/QueryUpdate.ts#L9)
