[**quetch**](../README.md)

***

[quetch](../README.md) / FieldKey

# Type Alias: FieldKey\<T\>

> **FieldKey**\<`T`\>: [`unknown`] *extends* [`T`] ? [`Key`](Key.md) : `T` *extends* [`Primitive`](Primitive.md) \| `undefined` ? *typeof* [`SELF`](../variables/SELF.md) : keyof `T`

Returns the type of keys that can be used to select fields from a value of type `T`.

## Type Parameters

• **T**

## Defined in

[lib/types/FieldKey.ts:9](https://github.com/nevoland/quetch/blob/f06bc3e41c99a7cd13f24ba66911a74f93f25000/lib/types/FieldKey.ts#L9)
