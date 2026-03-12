[**quetch**](../README.md)

***

[quetch](../README.md) / fetchExternal

# Function: fetchExternal()

> **fetchExternal**(`fetch`): [`Handler`](../type-aliases/Handler.md)\<`Request`, `Response`, `never`, `never`\>

Calls the provided `fetch` function, which defaults to the DOM `fetch` function, with the incoming `query`.

## Parameters

### fetch

(`input`, `init`?) => `Promise`\<`Response`\>(`input`, `init`?) => `Promise`\<`Response`\>

A standard `fetch` function.

## Returns

[`Handler`](../type-aliases/Handler.md)\<`Request`, `Response`, `never`, `never`\>

Handler that returns a promise that resolves to the response.

## Defined in

[lib/middlewares/fetchExternal.ts:12](https://github.com/nevoland/quetch/blob/439120295bc3ab3895611a5a04d7281d9d40fc45/lib/middlewares/fetchExternal.ts#L12)
