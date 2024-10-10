[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / retry

# Function: retry()

> **retry**(`options`): [`Handler`](../type-aliases/Handler.md)\<`Request`, `Response`, `Request`, `Response`\>

Retries a failed query call up to `amount` times, with a given `delay` in milliseconds at ±`delayDelta` milliseconds.
Note that an `amount` set to `Infinity` results in indefinitely trying to resolve a query call.
Only instances of `RequestError` that do not result in a `500` status error will result in new tries. Other errors will propagate immediately.

## Parameters

• **options** = `{}`

• **options.amount**: `undefined` \| `number` = `5`

• **options.delay**: `undefined` \| `number` = `1000`

• **options.delayDelta**: `undefined` \| `number` = `500`

## Returns

[`Handler`](../type-aliases/Handler.md)\<`Request`, `Response`, `Request`, `Response`\>

Handler

## Defined in

[lib/middlewares/retry.ts:15](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/middlewares/retry.ts#L15)
