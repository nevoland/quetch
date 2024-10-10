[**quetch**](../README.md) • **Docs**

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

• **P** *extends* `string` \| `number` \| `symbol` \| [`number`] \| [keyof `T`\<`T`\>] \| [keyof `T`\<`T`\>, ...(T\<T\>\[keyof T\<T\>\] extends P\[\] ? \[number\] \| \[number, ...(P extends P\[\] ? \[number\] \| \[number, ...(P extends P\[\] ? \[number\] : P extends object ? (...)\[(...)\] : never)\[\]\] : P extends object ? \{ \[K in string \| number \| symbol\]-?: \[(...)\] \| \[(...), ...(...)\[\]\] \}\[keyof P\<P\>\] : never)\[\]\] : T\<T\>\[keyof T\<T\>\] extends object ? \{ \[K in string \| number \| symbol\]-?: \[K\] \| \[K, ...(any\[any\]\[K\] extends P\[\] ? \[(...)\] \| \[(...), ...(...)\[\]\] : (...)\[(...)\] extends object ? (...)\[(...)\] : never)\[\]\] \}\[keyof any\[any\]\] : never)\[\]]

## Parameters

• **value**: `T`

The value from which to get the property value.

• **path?**: `P`

The path leading to the property value or a property name or `undefined`.

## Returns

[`Get`](../type-aliases/Get.md)\<`T`, `P`\>

The property value found at the given path, or `undefined` if it cannot be found.

## Defined in

[lib/tools/get.ts:13](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/tools/get.ts#L13)
