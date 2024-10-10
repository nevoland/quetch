[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / aggregate

# Function: aggregate()

> **aggregate**\<`I`, `O`, `In`, `On`\>(`options`): [`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

Aggregates multiple incoming query calls into one query.
Queries are grouped according to the string key returned by `queryGroupId(query)`. Inside a group, each query is identified with `queryId(query)`.
The aggregated query is built from the object returned by `queryForGroup(queryList, groupId)`, after at least `delay` milliseconds after the first non-aggregated aggregatable query call.
When the aggregated query resolves, the result is dispatched back to each aggregatable query call of the category by dispatching the result for each query returned by `resultForQuery(result, query)`.
If a query occurs twice, `mergeQuery(query, currentQuery)` is called and the output replaces the previous query.

## Type Parameters

• **I** *extends* [`Query`](../type-aliases/Query.md)\<`any`\> & `object`

• **O**

• **In** *extends* [`Query`](../type-aliases/Query.md)\<`any`\> & `object`

• **On**

## Parameters

• **options**

• **options.delay?**: `number` = `200`

• **options.mergeQuery?** = `...`

• **options.queryForGroup** = `...`

• **options.queryGroupId?** = `...`

• **options.queryId?** = `...`

• **options.resultForQuery** = `...`

## Returns

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

## Defined in

[lib/middlewares/aggregate.ts:16](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/middlewares/aggregate.ts#L16)
