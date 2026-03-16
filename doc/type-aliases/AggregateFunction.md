[**quetch**](../README.md)

***

[quetch](../README.md) / AggregateFunction

# Type Alias: AggregateFunction\<T\>

> **AggregateFunction**\<`T`\>: `"length"` \| \{`operator`: `"length"`; \} \| \{`filter`: [`Filter`](Filter.md)\<`T`\>;`last`: `boolean`;`operator`: `"index"`; \} \| \{`field`: [`Field`](Field.md)\<`T`\>;`operator`: `"median"` \| `"standardDeviation"` \| `"mean"` \| `"min"` \| `"max"` \| `"variance"` \| `"mode"`; \}

Aggregation function.

## Type Parameters

• **T**

## Defined in

[lib/types/AggregateFunction.ts:7](https://github.com/nevoland/quetch/blob/94f546831241bf41f83cf97787b7e923c8cf7824/lib/types/AggregateFunction.ts#L7)
