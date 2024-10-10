[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QueryCreateMultiple

# Type Alias: QueryCreateMultiple\<T\>

> **QueryCreateMultiple**\<`T`\>: `object`

Query for creating multiple items.

## Type Parameters

• **T** *extends* `object`

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to create the items.

### method

> **method**: `"create"`

### multiple

> **multiple**: `true`

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

### value

> **value**: `Partial`\<`T`\>[]

## Defined in

[lib/types/QueryCreateMultiple.ts:8](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/QueryCreateMultiple.ts#L8)
