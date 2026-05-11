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

[lib/types/Result.ts:66](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/Result.ts#L66)
