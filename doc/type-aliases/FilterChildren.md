[**quetch**](../README.md)

***

[quetch](../README.md) / FilterChildren

# Type Alias: FilterChildren\<T\>

> **FilterChildren**\<`T`\>: `object`

Matches the direct children of a specified `value` item.

## Type Parameters

• **T**

## Type declaration

### \[CACHE\]?

> `optional` **\[CACHE\]**: [`IntrinsicFilter`](IntrinsicFilter.md)\<`T`\>

### maxDepth?

> `optional` **maxDepth**: `number`

Maximum depth of the children to match. If `0`, matches the direct children. If `1`, matches the grandchildren, and so on.

#### Default

```ts
Infinity
```

### minDepth?

> `optional` **minDepth**: `number`

Minimum depth of the children to match. If `0`, matches the parent. If `1`, matches the direct children, if `2`, the grandchildren, and so on.

#### Default

```ts
1
```

### operator

> **operator**: `"children"` \| `"notChildren"`

### value?

> `optional` **value**: `T`

## Defined in

[lib/types/FilterChildren.ts:8](https://github.com/nevoland/quetch/blob/131557e11062ea669e329412a2b134052204e500/lib/types/FilterChildren.ts#L8)
