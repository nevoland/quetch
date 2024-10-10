[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QueryRead

# Type Alias: QueryRead\<T\>

> **QueryRead**\<`T`\>: `object`

Query for reading a single item.

## Type Parameters

• **T** *extends* `object`

## Type declaration

### context?

> `optional` **context**: [`Context`](Context.md)\<`T`\>

Common item properties to use for identifying the context in which to get the item.

### fields?

> `optional` **fields**: readonly keyof `T`[]

Item fields to pick. If omitted, all fields are picked.

### filter?

> `optional` **filter**: [`Filter`](Filter.md)\<`T`\>

Filter for finding the item, if it cannot be found based on the `context`.

### group?

> `optional` **group**: `never`

### limit?

> `optional` **limit**: `never`

### method?

> `optional` **method**: `"read"`

### multiple?

> `optional` **multiple**: `false`

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

[lib/types/QueryRead.ts:10](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/QueryRead.ts#L10)