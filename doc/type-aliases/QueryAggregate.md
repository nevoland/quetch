[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QueryAggregate

# Type Alias: QueryAggregate\<T\>

> **QueryAggregate**\<`T`\>: `object`

Query for computing an aggregated value.

## Type Parameters

• **T** *extends* `object`

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

> `optional` **order**: [`Order`](Order.md)\<`T`\>[]

Order by which the items should be sorted.

### parameters?

> `optional` **parameters**: [`Parameters`](Parameters.md)

Query parameters.

### settings?

> `optional` **settings**: [`QuerySettings`](QuerySettings.md)\<`T`\>

Query settings.

## Defined in

[lib/types/QueryAggregate.ts:11](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/QueryAggregate.ts#L11)
