[quetch](../README.md) / CustomFetch

# Interface: CustomFetch\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Callable

### CustomFetch

▸ **CustomFetch**\<`Q`\>(`query`): `Promise`\<[`Result`](../README.md#result)\<`T`, `Q`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Q` | extends [`Query`](../README.md#query)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` |

#### Returns

`Promise`\<[`Result`](../README.md#result)\<`T`, `Q`\>\>

#### Defined in

[lib/types/CustomFetch.ts:5](https://github.com/nevoland/quetch/blob/b46dff0534f861059aba3484d2e1d047d841b31f/lib/types/CustomFetch.ts#L5)
