[**quetch**](../README.md)

***

[quetch](../README.md) / QueryCreateMultiple

# Type Alias: QueryCreateMultiple\<T\>

> **QueryCreateMultiple**\<`T`\>: `object`

Query for creating multiple items.

## Type Parameters

• **T**

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

> **value**: readonly `Partial`\<`T`\>[]

## Defined in

[lib/types/QueryCreateMultiple.ts:8](https://github.com/nevoland/quetch/blob/5d54d23c7450a0f85309e15fdf3a25ea832b3452/lib/types/QueryCreateMultiple.ts#L8)
