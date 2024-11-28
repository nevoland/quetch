[**quetch**](../README.md)

***

[quetch](../README.md) / branch

# Function: branch()

> **branch**\<`I`, `O`, `In`, `On`\>(`condition`, `left`, `right`): [`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

Dispatches an incoming query to `left` if `condition(query)` returns a truthy value, `right` otherwise. This is helpful for sending queries to different resolvers.

## Type Parameters

• **I**

• **O**

• **In**

• **On**

## Parameters

### condition

(`input`) => `boolean`

### left

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

### right

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\> = `...`

## Returns

[`Handler`](../type-aliases/Handler.md)\<`I`, `O`, `In`, `On`\>

## Example

```typescript
const customFetch = combine(
  branch(query => query.protocol === 'gql', gqlHandlers),
  restHandlers,
)
```

## Defined in

[lib/middlewares/branch.ts:21](https://github.com/nevoland/quetch/blob/74684cd5cd1bd7a08980d4ce305ecc4be0c3e8b8/lib/middlewares/branch.ts#L21)
