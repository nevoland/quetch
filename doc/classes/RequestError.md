[**quetch**](../README.md)

***

[quetch](../README.md) / RequestError

# Class: RequestError

Error to be thrown in case there is an issue with the query call. Only instances of this error will be caught by the `retry()` middleware.

## Extends

- `Error`

## Constructors

### new RequestError()

> **new RequestError**(`message`, `status`, `query`?, `request`?, `response`?): [`RequestError`](RequestError.md)

#### Parameters

##### message

`string`

##### status

`number`

##### query?

[`Query`](../type-aliases/Query.md)\<`any`\>

##### request?

`Request`

##### response?

`Response`

#### Returns

[`RequestError`](RequestError.md)

#### Overrides

`Error.constructor`

#### Defined in

[lib/errors/RequestError.ts:7](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/errors/RequestError.ts#L7)

## Properties

### query?

> `optional` **query**: [`Query`](../type-aliases/Query.md)\<`any`\>

#### Defined in

[lib/errors/RequestError.ts:10](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/errors/RequestError.ts#L10)

***

### request?

> `optional` **request**: `Request`

#### Defined in

[lib/errors/RequestError.ts:11](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/errors/RequestError.ts#L11)

***

### response?

> `optional` **response**: `Response`

#### Defined in

[lib/errors/RequestError.ts:12](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/errors/RequestError.ts#L12)

***

### status

> **status**: `number`

#### Defined in

[lib/errors/RequestError.ts:9](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/errors/RequestError.ts#L9)
