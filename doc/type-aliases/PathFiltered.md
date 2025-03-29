[**quetch**](../README.md)

***

[quetch](../README.md) / PathFiltered

# Type Alias: PathFiltered\<T, P, D\>

> **PathFiltered**\<`T`, `P`, `D`\>: [`0`] *extends* [`1` & `T`] ? readonly ([`Key`](Key.md) \| `never`)[] : `D` *extends* `-1` ? `never` : `T` *extends* `P` ? readonly `never`[] : `T` *extends* `ReadonlyArray`\<infer I\> ? `Extract`\<`I`, `P`\> *extends* `never` ? readonly [`number`, `...PathFiltered<I, P, Increment<D>>`] : readonly [`number`] : `T` *extends* `object` ? `{ [K in keyof T]: Extract<T[K], P> extends never ? readonly [K, ...(...)] : readonly [K] }`\[keyof `T`\] : `never`

## Type Parameters

• **T**

• **P**

• **D** = `7`

## Defined in

[lib/types/PathFiltered.ts:4](https://github.com/nevoland/quetch/blob/3b1cd3aac672a1a4d2ad52892d4fa09995f51627/lib/types/PathFiltered.ts#L4)
