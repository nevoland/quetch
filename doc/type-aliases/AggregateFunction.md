[**quetch**](../README.md)

***

[quetch](../README.md) / AggregateFunction

# Type Alias: AggregateFunction\<T\>

> **AggregateFunction**\<`T`\>: `"length"` \| \{`operator`: `"length"`; \} \| \{`filter`: [`Filter`](Filter.md)\<`T`\>;`last`: `boolean`;`operator`: `"index"`; \} \| \{`field`: [`Field`](Field.md)\<`T`\>;`operator`: `"median"` \| `"standardDeviation"` \| `"mean"` \| `"min"` \| `"max"` \| `"variance"` \| `"mode"`; \}

Aggregation function.

## Type Parameters

• **T**

## Defined in

[lib/types/AggregateFunction.ts:7](https://github.com/nevoland/quetch/blob/26a6a149fc06ca974acb5d9f3e9fe2273dcb9969/lib/types/AggregateFunction.ts#L7)
