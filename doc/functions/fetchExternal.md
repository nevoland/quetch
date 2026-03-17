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

[lib/middlewares/fetchExternal.ts:12](https://github.com/nevoland/quetch/blob/1cf615b166541d2a753e34c0a2dd4a9474026d7a/lib/middlewares/fetchExternal.ts#L12)
