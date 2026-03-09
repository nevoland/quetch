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

[lib/types/Handler.ts:6](https://github.com/nevoland/quetch/blob/90f88a16e6d59a9c61398498a63289d526194476/lib/types/Handler.ts#L6)
