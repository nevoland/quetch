[**quetch**](../README.md)

***

[quetch](../README.md) / PathFiltered

# Type Alias: PathFiltered\<T, P, D\>

> **PathFiltered**\<`T`, `P`, `D`\>: [`unknown`] *extends* [`T`] ? readonly (`PropertyKey` \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* `P` ? readonly `never`[] : `T` *extends* `ReadonlyArray`\<infer I\> ? `Extract`\<`I`, `P`\> *extends* `never` ? readonly [`number`, `...PathFiltered<I, P, Decrement<D>>`] : readonly [`number`] : `T` *extends* `object` ? `{ [K in keyof T]: Extract<T[K], P> extends never ? readonly [K, ...(...)] : readonly [K] }`\[keyof `T`\] : `never`

Returns the type of paths that can be used to select fields from a value of type `T` whose mapped value extend the provided `P` type, with an optional depth limit `D`.

## Type Parameters

• **T**

• **P**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/PathFiltered.ts:7](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/types/PathFiltered.ts#L7)
