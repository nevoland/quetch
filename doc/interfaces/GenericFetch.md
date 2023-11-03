[quetch](../README.md) / GenericFetch

# Interface: GenericFetch<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Callable

### GenericFetch

▸ **GenericFetch**<`Q`\>(`query`): `Promise`<[`Result`](../README.md#result)<`T`, `Q`, {}, { readonly [K in string \| number \| symbol]: K extends keyof T ? T[K] : K extends never ? Object[K] extends FieldFunctionCustom<T\> ? ReturnType<Object[K]["value"]\> : Object[K]["operator"] extends "formatDate" ? FieldFunctionReturn[Object[K]["operator"]] : never : never }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Q` | extends [`Query`](../README.md#query)<`T`, {}\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `customFields?`: `undefined`  } |

#### Returns

`Promise`<[`Result`](../README.md#result)<`T`, `Q`, {}, { readonly [K in string \| number \| symbol]: K extends keyof T ? T[K] : K extends never ? Object[K] extends FieldFunctionCustom<T\> ? ReturnType<Object[K]["value"]\> : Object[K]["operator"] extends "formatDate" ? FieldFunctionReturn[Object[K]["operator"]] : never : never }\>\>

#### Defined in

[lib/types/GenericFetch.ts:6](https://github.com/nevoland/quetch/blob/c839ceb/lib/types/GenericFetch.ts#L6)

### GenericFetch

▸ **GenericFetch**<`Q`, `C`\>(`query`): `Promise`<[`Result`](../README.md#result)<`T`, `Q`, `C`, [`InjectCustomFields`](../README.md#injectcustomfields)<`T`, `C`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Q` | extends [`Query`](../README.md#query)<`T`, `C`\> |
| `C` | extends [`CustomFieldMap`](../README.md#customfieldmap)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `customFields`: `C`  } |

#### Returns

`Promise`<[`Result`](../README.md#result)<`T`, `Q`, `C`, [`InjectCustomFields`](../README.md#injectcustomfields)<`T`, `C`\>\>\>

#### Defined in

[lib/types/GenericFetch.ts:9](https://github.com/nevoland/quetch/blob/c839ceb/lib/types/GenericFetch.ts#L9)