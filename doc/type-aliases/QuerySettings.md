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

### fieldSeparatorEscape?

> `optional` **fieldSeparatorEscape**: `string`

String used to escape the separator.

#### Default

```ts
"\\"
```

### fieldSeparatorMap?

> `optional` **fieldSeparatorMap**: [`FieldMap`](FieldMap.md)\<`T`, `string`\> \| [`ValueMap`](ValueMap.md)\<`T`, `string`\>

Maps path fields to a string used to separate the path nodes of a field value.

### pathFieldKey?

> `optional` **pathFieldKey**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

Path to the field that contains the path value of an item, used for displaying items in a tree.

### signal?

> `optional` **signal**: `AbortSignal`

Abort signal to abort the query.

### transformFilterChildren()?

> `optional` **transformFilterChildren**: (`filter`) => `Exclude`\<[`Filter`](Filter.md)\<`T`\>, `object`\>

Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren`.

#### Parameters

##### filter

[`FilterChildren`](FilterChildren.md)\<`T`\>

The provided `FilterChildren` to express.

#### Returns

`Exclude`\<[`Filter`](Filter.md)\<`T`\>, `object`\>

A filter that captures the items expressed by the provided `FilterChildren`.

## Defined in

[lib/types/QuerySettings.ts:10](https://github.com/nevoland/quetch/blob/d3c3874b3b683738adb5be9e083a7d95e2758c83/lib/types/QuerySettings.ts#L10)
