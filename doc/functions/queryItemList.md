[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / queryItemList

# Function: queryItemList()

> **queryItemList**\<`T`, `Q`\>(`query`): [`Result`](../type-aliases/Result.md)\<`T`, `Q`\>

Performs a provided `query` on local data, provided through the `query.type` property.

## Type Parameters

• **T** *extends* `object`

• **Q** *extends* [`Query`](../type-aliases/Query.md)\<`T`\>

## Parameters

• **query**: `Q` & `object`

The query to perform.

## Returns

[`Result`](../type-aliases/Result.md)\<`T`, `Q`\>

The result of the query.

## Defined in

[lib/tools/queryItemList.ts:51](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/tools/queryItemList.ts#L51)
