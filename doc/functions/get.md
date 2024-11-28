[**quetch**](../README.md)

***

[quetch](../README.md) / get

# Function: get()

> **get**\<`T`, `P`\>(`value`, `path`?): [`Get`](../type-aliases/Get.md)\<`T`, `P`\>

Gets the property value of the given `value` at the specified `path` (an array of object property names or array indexes).
If the `path` is undefined, returns the `value` itself.
If the `path` is a string, it is considered as a path with one item.
If the `path` leads to an unknown property, returns `undefined`.

## Type Parameters

• **T**

• **P** *extends* `string` \| `number` \| `symbol` \| readonly [`number`] \| readonly `never`[] \| readonly [`Key`](../type-aliases/Key.md)[] \| [keyof `T`\<`T`\>] \| [keyof `T`\<`T`\>, `...Path<T<T>[keyof T<T>], 8>[]`]

## Parameters

### value

`T`

The value from which to get the property value.

### path?

`P`

The path leading to the property value or a property name or `undefined`.

## Returns

[`Get`](../type-aliases/Get.md)\<`T`, `P`\>

The property value found at the given path, or `undefined` if it cannot be found.

## Defined in

[lib/tools/get.ts:14](https://github.com/nevoland/quetch/blob/74684cd5cd1bd7a08980d4ce305ecc4be0c3e8b8/lib/tools/get.ts#L14)
