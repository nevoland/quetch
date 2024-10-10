[**quetch**](../README.md) • **Docs**

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

• **\_\_namedParameters**

• **\_\_namedParameters.extendCachedQuery**

Returns a query that completes the cached value.
Returns `undefined` if the query should not be completed.

• **\_\_namedParameters.invalidatesItem**

Returns `true` if the cached item must be invalidated.

• **\_\_namedParameters.itemId?** = `...`

Unique identifier for the item to cache.
Returns `undefined` if the item should not be cached.

• **\_\_namedParameters.mergeItem**

Merges the value from the extended query with the cached value.
Only called when `extendCachedQuery` returns a query.

• **\_\_namedParameters.mergeQuery**

Merges the extended query with the cached query.
Only called when `extendCachedQuery` returns a query.

• **\_\_namedParameters.store**: [`Store`](../type-aliases/Store.md)\<`CachedItem`\<`I`\>\>

Cache store.

## Returns

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

## Defined in

[lib/middlewares/cache.ts:8](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/middlewares/cache.ts#L8)
