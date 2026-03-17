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

### compareFieldValues()?

Compares two values of a field for sorting purposes. If not provided, values are compared using the default comparison operators (`>`, `<`, `===`).

This function is called only when both `a` and `b` are defined and different. If it returns `undefined`, the default comparison operators are used as a fallback.

#### Type Parameters

• **T**

#### Parameters

##### field

[`Field`](Field.md)\<`T`\>

The field for which the values are compared.

##### a

`any`

The first value to compare.

##### b

`any`

The second value to compare.

#### Returns

`undefined` \| `0` \| `1` \| `-1`

`-1` if `a` should be sorted before `b`, `1` if `a` should be sorted after `b`, `0` if they are considered equal, or `undefined` to use the default comparison operators.

## Defined in

[lib/types/QuerySettings.ts:8](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/types/QuerySettings.ts#L8)
