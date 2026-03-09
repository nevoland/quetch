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

Minimum depth of the children to match. If `0`, matches the direct children. If `1`, matches the grandchildren, and so on.

#### Default

```ts
0
```

### operator

> **operator**: `"children"` \| `"notChildren"`

### value?

> `optional` **value**: [`Context`](Context.md)\<`T`\>

## Defined in

[lib/types/FilterChildren.ts:9](https://github.com/nevoland/quetch/blob/75ee4a15f2f2b7e06491343419abee1d1c8ff78f/lib/types/FilterChildren.ts#L9)
