[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / defineCheckQuery

# Function: defineCheckQuery()

> **defineCheckQuery**\<`M`\>(): \<`T`, `Q`\>(`query`) => *typeof* `query`\<`K`, `T`, `Q`\>(`query`) => *typeof* `query`

Returns a function that checks queries. This is useful to prevent the query to have its type being narrowed if declared outside of a custom fetcher function argument.

## Type Parameters

• **M** *extends* `Record`\<`string`, `object`\>

## Returns

`Function`

Function that checks queries.

### Type Parameters

• **T** *extends* `object`

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

### Parameters

• **query**: `Q` & `object`

### Returns

*typeof* `query`

### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **T** *extends* `object`

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

### Parameters

• **query**: `Q` & `object`

### Returns

*typeof* `query`

## Defined in

[lib/tools/defineCheckQuery.ts:8](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/tools/defineCheckQuery.ts#L8)
