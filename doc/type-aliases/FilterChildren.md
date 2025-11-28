[**quetch**](../README.md)

***

[quetch](../README.md) / FilterChildren

# Type Alias: FilterChildren\<T\>

> **FilterChildren**\<`T`\>: `object`

Matches the direct children of a specified `value` item.
If `deep` is `true`, also captures all the descendants.

## Type Parameters

• **T**

## Type declaration

### \[CACHE\]?

> `optional` **\[CACHE\]**: [`Filter`](Filter.md)\<`T`\>

### deep?

> `optional` **deep**: `boolean`

### operator

> **operator**: `"children"` \| `"notChildren"`

### value?

> `optional` **value**: [`Context`](Context.md)\<`T`\> \| `string`

## Defined in

[lib/types/FilterChildren.ts:10](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/types/FilterChildren.ts#L10)
