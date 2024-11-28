[**quetch**](../README.md)

***

[quetch](../README.md) / cache

# Function: cache()

> **cache**\<`I`, `O`, `In`, `On`\>(`__namedParameters`): [`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

## Type Parameters

• **I** *extends* [`Query`](../type-aliases/Query.md)\<`any`\> & `object`

• **O**

• **In** *extends* [`Query`](../type-aliases/Query.md)\<`any`\>

• **On**

## Parameters

### \_\_namedParameters

#### __namedParameters.extendCachedQuery

(`query`, `cachedQuery`) => `undefined` \| `I`

Returns a query that completes the cached value.
Returns `undefined` if the query should not be completed.

#### __namedParameters.invalidatesItem

(`query`, `cachedQuery`, `cachedValue`) => `boolean`

Returns `true` if the cached item must be invalidated.

#### __namedParameters.itemId

(`query`) => `undefined` \| `string` = `...`

Unique identifier for the item to cache.
Returns `undefined` if the item should not be cached.

#### __namedParameters.mergeItem

(`value`, `cachedValue`, `query`, `cachedQuery`) => `any`

Merges the value from the extended query with the cached value.
Only called when `extendCachedQuery` returns a query.

#### __namedParameters.mergeQuery

(`extendedQuery`, `cachedQuery`) => `I`

Merges the extended query with the cached query.
Only called when `extendCachedQuery` returns a query.

#### __namedParameters.store

[`Store`](../type-aliases/Store.md)\<`CachedItem`\<`I`\>\>

Cache store.

## Returns

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

## Defined in

[lib/middlewares/cache.ts:8](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/middlewares/cache.ts#L8)
