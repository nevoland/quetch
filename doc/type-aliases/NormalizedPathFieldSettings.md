[**quetch**](../README.md)

***

[quetch](../README.md) / NormalizedPathFieldSettings

# Type Alias: NormalizedPathFieldSettings\<T\>

> **NormalizedPathFieldSettings**\<`T`\>: `object`

Settings for fields that contain path values of items, used for displaying items in a tree.

## Type Parameters

• **T**

## Type declaration

### pathField?

> `optional` **pathField**: [`FieldFiltered`](FieldFiltered.md)\<`T`, `string`\>

Path to the field that contains the path value of an item, used for displaying items in a tree.

#### Default

```ts
"path"
```

### pathFieldSeparator?

> `optional` **pathFieldSeparator**: `string`

Maps path fields to a string used to separate the path nodes of a field value.

#### Default

```ts
"/"
```

### pathFieldSeparatorEscape?

> `optional` **pathFieldSeparatorEscape**: `string`

String used to escape the separator.

#### Default

```ts
"\\"
```

## Defined in

[lib/types/NormalizedPathFieldSettings.ts:6](https://github.com/nevoland/quetch/blob/11efc4791b6b46376df8dcc576f30e0b288063ba/lib/types/NormalizedPathFieldSettings.ts#L6)
