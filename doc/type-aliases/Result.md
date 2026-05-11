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

[lib/types/Result.ts:64](https://github.com/nevoland/quetch/blob/26a6a149fc06ca974acb5d9f3e9fe2273dcb9969/lib/types/Result.ts#L64)
