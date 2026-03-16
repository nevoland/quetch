[**quetch**](../README.md)

***

[quetch](../README.md) / Handler

# Type Alias: Handler()\<I, O, NI, No\>

> **Handler**\<`I`, `O`, `NI`, `No`\>: (`input`, `next`) => `Promise`\<`O`\>

Handles an `input` query and returns an `output` promise, eventually using the `next` handler.

## Type Parameters

• **I**

• **O**

• **NI**

• **No**

## Parameters

### input

`I`

### next

[`NextHandler`](NextHandler.md)\<`NI`, `No`\>

## Returns

`Promise`\<`O`\>

## Defined in

[lib/types/Handler.ts:6](https://github.com/nevoland/quetch/blob/94f546831241bf41f83cf97787b7e923c8cf7824/lib/types/Handler.ts#L6)
