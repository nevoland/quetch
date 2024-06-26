[quetch](../README.md) / RequestError

# Class: RequestError

Error to be thrown in case there is an issue with the query call. Only instances of this error will be caught by the `retry()` middleware.

## Hierarchy

- `Error`

  ↳ **`RequestError`**

## Table of contents

### Constructors

- [constructor](RequestError.md#constructor)

### Properties

- [query](RequestError.md#query)
- [request](RequestError.md#request)
- [response](RequestError.md#response)
- [status](RequestError.md#status)

## Constructors

### constructor

• **new RequestError**(`message`, `status`, `query?`, `request?`, `response?`): [`RequestError`](RequestError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `status` | `number` |
| `query?` | [`Query`](../README.md#query)\<`any`\> |
| `request?` | `Request` |
| `response?` | `Response` |

#### Returns

[`RequestError`](RequestError.md)

#### Overrides

Error.constructor

#### Defined in

[lib/errors/RequestError.ts:7](https://github.com/nevoland/quetch/blob/b46dff0534f861059aba3484d2e1d047d841b31f/lib/errors/RequestError.ts#L7)

## Properties

### query

• `Optional` **query**: [`Query`](../README.md#query)\<`any`\>

#### Defined in

[lib/errors/RequestError.ts:10](https://github.com/nevoland/quetch/blob/b46dff0534f861059aba3484d2e1d047d841b31f/lib/errors/RequestError.ts#L10)

___

### request

• `Optional` **request**: `Request`

#### Defined in

[lib/errors/RequestError.ts:11](https://github.com/nevoland/quetch/blob/b46dff0534f861059aba3484d2e1d047d841b31f/lib/errors/RequestError.ts#L11)

___

### response

• `Optional` **response**: `Response`

#### Defined in

[lib/errors/RequestError.ts:12](https://github.com/nevoland/quetch/blob/b46dff0534f861059aba3484d2e1d047d841b31f/lib/errors/RequestError.ts#L12)

___

### status

• **status**: `number`

#### Defined in

[lib/errors/RequestError.ts:9](https://github.com/nevoland/quetch/blob/b46dff0534f861059aba3484d2e1d047d841b31f/lib/errors/RequestError.ts#L9)
