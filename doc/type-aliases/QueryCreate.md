[**quetch**](../README.md)

***

[quetch](../README.md) / QueryCreate

# Type Alias: QueryCreate\<T\>

> **QueryCreate**\<`T`\>: `object`

Query for creating an item.

## Type Parameters

• **T**

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

[lib/types/QueryCreate.ts:8](https://github.com/nevoland/quetch/blob/d3c3874b3b683738adb5be9e083a7d95e2758c83/lib/types/QueryCreate.ts#L8)
