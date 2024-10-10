[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / QuerySettings

# Type Alias: QuerySettings\<T\>

> **QuerySettings**\<`T`\>: `object`

Settings to use when doing a query.

## Type Parameters

• **T** *extends* `object`

## Type declaration

### abortController?

> `optional` **abortController**: `AbortController`

Abort controller to abort the query.

### pathFieldKey?

> `optional` **pathFieldKey**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

Field key to that contains the path value of an item.

### pathFieldSeparator?

> `optional` **pathFieldSeparator**: `string`

String used to separate the path nodes of an item.

### signal?

> `optional` **signal**: `AbortSignal`

Abort signal to abort the query.

### transformFilterChildren()?

> `optional` **transformFilterChildren**: (`filter`) => `Exclude`\<[`Filter`](Filter.md)\<`T`\>, `object`\>

Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren`.

#### Parameters

• **filter**: [`FilterChildren`](FilterChildren.md)\<`T`\>

The provided `FilterChildren` to express.

#### Returns

`Exclude`\<[`Filter`](Filter.md)\<`T`\>, `object`\>

A filter that captures the items expressed by the provided `FilterChildren`.

## Defined in

[lib/types/QuerySettings.ts:8](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/QuerySettings.ts#L8)
