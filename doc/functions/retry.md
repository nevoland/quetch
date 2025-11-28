[**quetch**](../README.md)

***

[quetch](../README.md) / retry

# Function: retry()

> **retry**(`options`): [`Handler`](../type-aliases/Handler.md)\<`Request`, `Response`, `Request`, `Response`\>

Retries a failed query call up to `amount` times, with a given `delay` in milliseconds at ±`delayDelta` milliseconds.
Note that an `amount` set to `Infinity` results in indefinitely trying to resolve a query call.
Only instances of `RequestError` that do not result in a `500` status error will result in new tries. Other errors will propagate immediately.

## Parameters

### options

#### options.amount

`number` = `5`

#### options.delay

`number` = `1000`

#### options.delayDelta

`number` = `500`

## Returns

[`Handler`](../type-aliases/Handler.md)\<`Request`, `Response`, `Request`, `Response`\>

Handler

## Defined in

[lib/middlewares/retry.ts:15](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/middlewares/retry.ts#L15)
