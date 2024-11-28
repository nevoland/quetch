[**quetch**](../README.md)

***

[quetch](../README.md) / defineGenericFetch

# Function: defineGenericFetch()

> **defineGenericFetch**\<`K`\>(`handler`): \<`T`\>() => \<`Q`\>(`query`) => `Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

Returns a generic fetch function that has to be called like this:
```ts
genericFetch<T>()(query)
```

## Type Parameters

• **K** *extends* `string`

## Parameters

### handler

[`Handler`](../type-aliases/Handler.md)\<[`Query`](../type-aliases/Query.md)\<`any`\> & `object`, `any`, `never`, `never`\>

The query handler.

## Returns

`Function`

A curried generic fetch function.

### Type Parameters

• **T**

### Returns

`Function`

#### Type Parameters

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

#### Parameters

##### query

`Q` & `object`

#### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>\>

## Defined in

[lib/tools/defineGenericFetch.ts:14](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/tools/defineGenericFetch.ts#L14)
