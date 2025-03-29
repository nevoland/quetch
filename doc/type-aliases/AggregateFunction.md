[**quetch**](../README.md)

***

[quetch](../README.md) / AggregateFunction

# Type Alias: AggregateFunction\<T\>

> **AggregateFunction**\<`T`\>: `"length"` \| \{`operator`: `"length"`; \} \| \{`filter`: [`Filter`](Filter.md)\<`T`\>;`last`: `boolean`;`operator`: `"index"`; \} \| \{`field`: [`Field`](Field.md)\<`T`\>;`operator`: `"median"` \| `"standardDeviation"` \| `"mean"` \| `"minimum"` \| `"maximum"` \| `"variance"` \| `"mode"`; \}

Aggregation function.

## Type Parameters

• **T**

## Defined in

[lib/types/AggregateFunction.ts:7](https://github.com/nevoland/quetch/blob/3b1cd3aac672a1a4d2ad52892d4fa09995f51627/lib/types/AggregateFunction.ts#L7)
