[**quetch**](../README.md)

***

[quetch](../README.md) / PathFiltered

# Type Alias: PathFiltered\<T, P, D\>

> **PathFiltered**\<`T`, `P`, `D`\>: [`unknown`] *extends* [`T`] ? readonly (`PropertyKey` \| `never`)[] : [`0`] *extends* [`1` & `T`] ? readonly (`PropertyKey` \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* `P` ? readonly `never`[] : `T` *extends* `ReadonlyArray`\<infer I\> ? `Extract`\<`I`, `P`\> *extends* `never` ? readonly [`number`, `...PathFiltered<I, P, Decrement<(...)>>`] : readonly [`number`] : `T` *extends* `object` ? `{ [K in keyof T]: Extract<(...)[(...)], P> extends never ? readonly [(...), (...)] : readonly [(...)] }`\[keyof `T`\] : `never`

Returns the type of paths that can be used to select fields from a value of type `T` whose mapped value extend the provided `P` type, with an optional depth limit `D`.

## Type Parameters

• **T**

• **P**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/PathFiltered.ts:7](https://github.com/nevoland/quetch/blob/852e493056419119d071edc6f41975a9efd727e3/lib/types/PathFiltered.ts#L7)
