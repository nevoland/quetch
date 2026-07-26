[**quetch**](../README.md)

***

[quetch](../README.md) / AggregateFunction

# Type Alias: AggregateFunction\<T\>

> **AggregateFunction**\<`T`\>: `"length"` \| \{`operator`: `"length"`; \} \| \{`filter`: [`Filter`](Filter.md)\<`T`\>;`last`: `boolean`;`operator`: `"index"`; \} \| \{`field`: [`Field`](Field.md)\<`T`\>;`operator`: `"median"` \| `"standardDeviation"` \| `"mean"` \| `"min"` \| `"max"` \| `"variance"` \| `"mode"`; \}

Aggregation function.

## Type Parameters

• **T**

## Defined in

[lib/types/AggregateFunction.ts:7](https://github.com/nevoland/quetch/blob/852e493056419119d071edc6f41975a9efd727e3/lib/types/AggregateFunction.ts#L7)
