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

[lib/types/Store.ts:2](https://github.com/nevoland/quetch/blob/b70842cb9761fe7c217edef26e0fbc90449abccb/lib/types/Store.ts#L2)
