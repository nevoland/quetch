[**quetch**](../README.md)

***

[quetch](../README.md) / PathFiltered

# Type Alias: PathFiltered\<T, P, D\>

> **PathFiltered**\<`T`, `P`, `D`\>: [`unknown`] *extends* [`T`] ? readonly ([`Key`](Key.md) \| `never`)[] : [`0`] *extends* [`1` & `T`] ? readonly ([`Key`](Key.md) \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* `P` ? readonly `never`[] : `T` *extends* `ReadonlyArray`\<infer I\> ? `Extract`\<`I`, `P`\> *extends* `never` ? readonly [`number`, `...PathFiltered<I, P, Decrement<(...)>>`] : readonly [`number`] : `T` *extends* `object` ? `{ [K in keyof T]: Extract<(...)[(...)], P> extends never ? readonly [(...), (...)] : readonly [(...)] }`\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **P**

• **D** = [`DepthLimit`](DepthLimit.md)

## Defined in

[lib/types/PathFiltered.ts:5](https://github.com/nevoland/quetch/blob/f290c9f2f51b8b7accd7522858dc7670791c1cb4/lib/types/PathFiltered.ts#L5)
