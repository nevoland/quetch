[**quetch**](../README.md)

***

[quetch](../README.md) / splitPath

# Function: splitPath()

## Call Signature

> **splitPath**(`separator`, `separatorEscape`, `path`): readonly `string`[]

Splits a `path` string using the `separator`, omitting those prefixed with a `separatorEscape`.

If `path` is `undefined`, returns a function that takes `path` and splits it according to the provided `separator` and `separatorEscape` arguments.

### Parameters

#### separator

`undefined` | `string`

#### separatorEscape

`undefined` | `string`

#### path

`string`

The path string to split.

### Returns

readonly `string`[]

An array containing the splitted path items if `path` is defined, or a function that takes a `path` string and returns an array.

### Defined in

[lib/tools/splitPath.ts:22](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/tools/splitPath.ts#L22)

## Call Signature

> **splitPath**(`separator`?, `separatorEscape`?): `PathSplitter`

Splits a `path` string using the `separator`, omitting those prefixed with a `separatorEscape`.

If `path` is `undefined`, returns a function that takes `path` and splits it according to the provided `separator` and `separatorEscape` arguments.

### Parameters

#### separator?

`string`

The separator string to use (defaults to `"/"`).

#### separatorEscape?

`string`

The separator escape string to use (default to `"\\"`).

### Returns

`PathSplitter`

An array containing the splitted path items if `path` is defined, or a function that takes a `path` string and returns an array.

### Defined in

[lib/tools/splitPath.ts:27](https://github.com/nevoland/quetch/blob/a3ccd863643bdab12f1ae3f17b69623aaeed1b9f/lib/tools/splitPath.ts#L27)
