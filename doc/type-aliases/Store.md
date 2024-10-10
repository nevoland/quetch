[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / Store

# Type Alias: Store\<T\>

> **Store**\<`T`\>: `object`

## Type Parameters

• **T** = `any`

## Type declaration

### delete()

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`void`\>

### get()

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`T`\>

### has()

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`boolean`\>

### set()

#### Parameters

• **key**: `string`

• **value**: `T`

#### Returns

`Promise`\<`void`\>

## Defined in

[lib/types/Store.ts:2](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/Store.ts#L2)
