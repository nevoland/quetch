[**quetch**](../README.md)

***

[quetch](../README.md) / FieldKey

# Type Alias: FieldKey\<T\>

> **FieldKey**\<`T`\>: [`unknown`] *extends* [`T`] ? `PropertyKey` : `T` *extends* [`Primitive`](Primitive.md) \| `undefined` ? *typeof* [`SELF`](../variables/SELF.md) : keyof `T`

Returns the type of keys that can be used to select fields from a value of type `T`.

## Type Parameters

• **T**

## Defined in

[lib/types/FieldKey.ts:8](https://github.com/nevoland/quetch/blob/852e493056419119d071edc6f41975a9efd727e3/lib/types/FieldKey.ts#L8)
