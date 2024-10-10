[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QueryCreate

# Type Alias: QueryCreate\<T\>

> **QueryCreate**\<`T`\>: `object`

Query for creating an item.

## Type Parameters

• **T** *extends* `object`

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to create the item.

### method

> **method**: `"create"`

### multiple?

> `optional` **multiple**: `false`

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

### value

> **value**: `Partial`\<`T`\>

Value properties of the item to create.

## Defined in

[lib/types/QueryCreate.ts:8](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/QueryCreate.ts#L8)