[**quetch**](../README.md)

***

[quetch](../README.md) / FieldKey

# Type Alias: FieldKey\<T\>

> **FieldKey**\<`T`\>: [`unknown`] *extends* [`T`] ? `PropertyKey` : `T` *extends* [`Primitive`](Primitive.md) \| `undefined` ? *typeof* [`SELF`](../variables/SELF.md) : keyof `T`

Returns the type of keys that can be used to select fields from a value of type `T`.

## Type Parameters

• **T**

## Defined in

[lib/types/FieldKey.ts:8](https://github.com/nevoland/quetch/blob/81c71be508855bcc25db1158d9807bd1ffde0731/lib/types/FieldKey.ts#L8)
