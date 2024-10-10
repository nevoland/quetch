[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QueryDeleteMultiple

# Type Alias: QueryDeleteMultiple\<T\>

> **QueryDeleteMultiple**\<`T`\>: `object`

Query for deleting multiple items.

## Type Parameters

• **T** *extends* `object`

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to delete the item.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

### method

> **method**: `"delete"`

### multiple

> **multiple**: `true`

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

## Defined in

[lib/types/QueryDeleteMultiple.ts:9](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/QueryDeleteMultiple.ts#L9)
