[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / FilterChildren

# Type Alias: FilterChildren\<T\>

> **FilterChildren**\<`T`\>: `object`

Matches the direct children of a specified `value` item.
If `deep` is `true`, also captures all the descendants.

## Type Parameters

• **T** *extends* `object`

## Type declaration

### \[SymbolCache\]?

> `optional` **\[SymbolCache\]**: [`Filter`](Filter.md)\<`T`\>

### deep?

> `optional` **deep**: `boolean`

### operator

> **operator**: `"children"`

### value?

> `optional` **value**: [`Context`](Context.md)\<`T`\> \| `string`

## Defined in

[lib/types/FilterChildren.ts:10](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/types/FilterChildren.ts#L10)
