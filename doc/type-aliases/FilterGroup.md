[**quetch**](../README.md)

***

[quetch](../README.md) / FilterGroup

# Type Alias: FilterGroup\<T\>

> **FilterGroup**\<`T`\>: \{`operator`: `"all"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \} \| \{`operator`: `"any"` \| `"none"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

Joins a list of filters with a specific boolean operator.

## Type Parameters

• **T**

## Type declaration

\{`operator`: `"all"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

### operator

> **operator**: `"all"`

Boolean operator to use for joining the filters.

### value

> **value**: readonly [`Filter`](Filter.md)\<`T`\>[]

Filters to join.

\{`operator`: `"any"` \| `"none"`;`value`: readonly [`Filter`](Filter.md)\<`T`\>[]; \}

### operator

> **operator**: `"any"` \| `"none"`

Boolean operator to use for joining the filters.

### value?

> `optional` **value**: readonly [`Filter`](Filter.md)\<`T`\>[]

Filters to join.

## Defined in

[lib/types/FilterGroup.ts:6](https://github.com/nevoland/quetch/blob/db84578eb5eba15d3388a1c2cfad7cc80fe9fbe6/lib/types/FilterGroup.ts#L6)
