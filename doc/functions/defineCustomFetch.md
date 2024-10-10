[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / defineCustomFetch

# Function: defineCustomFetch()

> **defineCustomFetch**\<`M`\>(`handler`): \<`K`, `T`, `Q`\>(`query`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>\<`T`, `Q`\>(`type`, `query`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

Returns a custom fetch function that handles a `query`

## Type Parameters

• **M** *extends* `Record`\<`string`, `object`\>

## Parameters

• **handler**: [`Handler`](../type-aliases/Handler.md)\<[`Query`](../type-aliases/Query.md)\<`any`\> & `object`, `any`, `never`, `never`\>

The query handler.

## Returns

`Function`

A custom fetch function.

### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **T** *extends* `object`

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

### Parameters

• **query**: `Q` & `object`

### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

### Type Parameters

• **T** *extends* `object`

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

### Parameters

• **type**: `T`[]

• **query**: `Q`

### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

## Defined in

[lib/tools/defineCustomFetch.ts:11](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/tools/defineCustomFetch.ts#L11)
