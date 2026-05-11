[**quetch**](../README.md)

***

[quetch](../README.md) / defineCustomFetch

# Function: defineCustomFetch()

> **defineCustomFetch**\<`M`\>(`handler`): \<`K`, `T`, `Q`\>(`query`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>\<`T`, `Q`\>(`type`, `query`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

Returns a custom fetch function that handles a `query`

## Type Parameters

• **M** *extends* `Record`\<`string`, `object`\>

## Parameters

### handler

[`Handler`](../type-aliases/Handler.md)\<[`Query`](../type-aliases/Query.md)\<`any`\> & `object`, `any`, `never`, `never`\>

The query handler.

## Returns

`Function`

A custom fetch function.

### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **T** *extends* `object`

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

### Parameters

#### query

`Q` & `object`

### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

### Type Parameters

• **T**

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

### Parameters

#### type

`T`[]

#### query

`Q`

### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

## Defined in

[lib/tools/defineCustomFetch.ts:11](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/tools/defineCustomFetch.ts#L11)
