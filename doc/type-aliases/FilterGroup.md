[**quetch**](../README.md)

***

[quetch](../README.md) / FilterGroup

# Type Alias: FilterGroup\<T\>

> **FilterGroup**\<`T`\>: \{`operator`: `"all"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \} \| \{`maximum`: `number`;`minimum`: `number`;`operator`: `"any"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \} \| \{`operator`: `"none"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

Joins a list of filters with a specific boolean operator.

## Type Parameters

• **T**

## Type declaration

\{`operator`: `"all"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

### operator

> **operator**: `"all"`

Checks if all filters are true.

### value

> **value**: readonly [`Filter`](Filter.md)\<`T`\>[]

Filters to join.

\{`maximum`: `number`;`minimum`: `number`;`operator`: `"any"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

### maximum?

> `optional` **maximum**: `number`

Maximum number of filters that can match.

#### Default

```ts
Infinity
```

### minimum?

> `optional` **minimum**: `number`

Minimum number of filters that must match.

#### Default

`1` if filters are provided, `0` otherwise

### operator

> **operator**: `"any"`

Checks if at least one of the filters match.
Always true if no filters are provided.

### value?

> `optional` **value**: readonly [`Filter`](Filter.md)\<`T`\>[]

Filters to join.

\{`operator`: `"none"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

### operator

> **operator**: `"none"`

Checks if none of the filters match.
Always false if no filters are provided.

### value?

> `optional` **value**: readonly [`Filter`](Filter.md)\<`T`\>[]

Filters to join.

## Defined in

[lib/types/FilterGroup.ts:6](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/types/FilterGroup.ts#L6)
