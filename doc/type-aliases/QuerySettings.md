[**quetch**](../README.md)

***

[quetch](../README.md) / QuerySettings

# Type Alias: QuerySettings\<T\>

> **QuerySettings**\<`T`\>: `object`

Settings to use when doing a query.

## Type Parameters

• **T**

## Type declaration

### abortController?

> `optional` **abortController**: `AbortController`

Abort controller to abort the query.

### pathField?

> `optional` **pathField**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

Path to the field that contains the path value of an item, used for displaying items in a tree.

### pathFieldSeparator?

> `optional` **pathFieldSeparator**: `string`

Maps path fields to a string used to separate the path nodes of a field value.

#### Default

```ts
"/"
```

### pathFieldSeparatorEscape?

> `optional` **pathFieldSeparatorEscape**: `string`

String used to escape the separator.

#### Default

```ts
"\\"
```

### signal?

> `optional` **signal**: `AbortSignal`

Abort signal to abort the query.

### transformFilterChildren()?

> `optional` **transformFilterChildren**: (`filter`) => [`IntrinsicFilter`](IntrinsicFilter.md)\<`T`\>

Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren` or `FilterContext`.

#### Parameters

##### filter

[`FilterChildren`](FilterChildren.md)\<`T`\>

The provided `FilterChildren` to express.

#### Returns

[`IntrinsicFilter`](IntrinsicFilter.md)\<`T`\>

A filter that captures the items expressed by the provided `FilterChildren`.

## Defined in

[lib/types/QuerySettings.ts:8](https://github.com/nevoland/quetch/blob/94f546831241bf41f83cf97787b7e923c8cf7824/lib/types/QuerySettings.ts#L8)
