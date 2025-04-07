[**quetch**](../README.md)

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

### options

#### options.delay

`number` = `200`

#### options.mergeQuery

(`query`, `currentQuery`) => `I` = `...`

#### options.queryForGroup

(`queryList`, `group`) => [`Query`](../type-aliases/Query.md)\<`any`\> & `object` = `...`

#### options.queryGroupId

(`query`) => `undefined` \| `string` = `...`

#### options.queryId

(`query`) => `undefined` \| `string` = `...`

#### options.resultForQuery

(`resultList`, `query`) => `O` = `...`

## Returns

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

## Defined in

[lib/middlewares/aggregate.ts:17](https://github.com/nevoland/quetch/blob/5d54d23c7450a0f85309e15fdf3a25ea832b3452/lib/middlewares/aggregate.ts#L17)
