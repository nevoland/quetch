[**quetch**](../README.md)

***

[quetch](../README.md) / QueryAggregate

# Type Alias: QueryAggregate\<T\>

> **QueryAggregate**\<`T`\>: `object`

Query for computing an aggregated value.

## Type Parameters

• **T**

## Type declaration

### aggregator

> **aggregator**: [`AggregateFunction`](AggregateFunction.md)\<`T`\>

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the item.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

Filter that picks the items.

### limit?

> `optional` **limit**: `number`

Upper bound of the number of items to return.

### method

> **method**: `"aggregate"`

### offset?

> `optional` **offset**: `number`

Offset of the first matching item.

### order?

> `optional` **order**: readonly [`Order`](Order.md)\<`T`\>[]

Order by which the items should be sorted.

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

## Defined in

[lib/types/QueryAggregate.ts:11](https://github.com/nevoland/quetch/blob/3b1cd3aac672a1a4d2ad52892d4fa09995f51627/lib/types/QueryAggregate.ts#L11)
