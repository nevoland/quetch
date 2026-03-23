[**quetch**](../README.md)

***

[quetch](../README.md) / Result

# Type Alias: Result\<T, Q\>

> **Result**\<`T`, `Q`\>: [`Q`] *extends* [[`QueryReadMultiple`](QueryReadMultiple.md)\<`T`\>] ? readonly `ResultRead`\<`T`, `Q`\>[] : [`Q`] *extends* [[`QueryRead`](QueryRead.md)\<`T`\>] ? `ResultRead`\<`T`, `Q`\> : [`Q`] *extends* [`object`] ? `number` : `never`

Result of a read and aggregate query.

## Type Parameters

• **T**

• **Q** *extends* [`Query`](Query.md)\<`T`\>

## Defined in

[lib/types/Result.ts:64](https://github.com/nevoland/quetch/blob/131557e11062ea669e329412a2b134052204e500/lib/types/Result.ts#L64)
