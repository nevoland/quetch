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

> `optional` **value**: [`Context`](Context.md)\<`T`\>

## Defined in

[lib/types/FilterChildren.ts:9](https://github.com/nevoland/quetch/blob/439120295bc3ab3895611a5a04d7281d9d40fc45/lib/types/FilterChildren.ts#L9)
