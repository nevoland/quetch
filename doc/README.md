quetch

# quetch

## Table of contents

### Classes

- [RequestError](classes/RequestError.md)

### Interfaces

- [CustomFetch](interfaces/CustomFetch.md)

### Type Aliases

- [AggregateFunction](README.md#aggregatefunction)
- [AggregateFunctionOperator](README.md#aggregatefunctionoperator)
- [Any](README.md#any)
- [Context](README.md#context)
- [CustomFieldAggregateMap](README.md#customfieldaggregatemap)
- [CustomFieldMap](README.md#customfieldmap)
- [FieldFunction](README.md#fieldfunction)
- [FieldFunctionCustom](README.md#fieldfunctioncustom)
- [FieldFunctionFormatDate](README.md#fieldfunctionformatdate)
- [FieldFunctionReturn](README.md#fieldfunctionreturn)
- [Filter](README.md#filter)
- [FilterArray](README.md#filterarray)
- [FilterBoolean](README.md#filterboolean)
- [FilterChildren](README.md#filterchildren)
- [FilterCustom](README.md#filtercustom)
- [FilterField](README.md#filterfield)
- [FilterGroup](README.md#filtergroup)
- [FilterKeys](README.md#filterkeys)
- [FilterNumber](README.md#filternumber)
- [FilterOperator](README.md#filteroperator)
- [FilterString](README.md#filterstring)
- [FilterStringIntersect](README.md#filterstringintersect)
- [FilterStringMatch](README.md#filterstringmatch)
- [Get](README.md#get)
- [Group](README.md#group)
- [Handler](README.md#handler)
- [Immutable](README.md#immutable)
- [InjectCustomFields](README.md#injectcustomfields)
- [Item](README.md#item)
- [Key](README.md#key)
- [Locale](README.md#locale)
- [Mutable](README.md#mutable)
- [NextHandler](README.md#nexthandler)
- [Order](README.md#order)
- [Parameters](README.md#parameters)
- [Query](README.md#query)
- [QueryAggregate](README.md#queryaggregate)
- [QueryCreate](README.md#querycreate)
- [QueryCreateMultiple](README.md#querycreatemultiple)
- [QueryDelete](README.md#querydelete)
- [QueryDeleteMultiple](README.md#querydeletemultiple)
- [QueryMethod](README.md#querymethod)
- [QueryRead](README.md#queryread)
- [QueryReadMultiple](README.md#queryreadmultiple)
- [QuerySettings](README.md#querysettings)
- [QueryUpdate](README.md#queryupdate)
- [QueryUpdateMultiple](README.md#queryupdatemultiple)
- [Result](README.md#result)
- [Store](README.md#store)

### Functions

- [aggregate](README.md#aggregate)
- [branch](README.md#branch)
- [cache](README.md#cache)
- [combine](README.md#combine)
- [cork](README.md#cork)
- [defineCheckQuery](README.md#definecheckquery)
- [defineCustomFetch](README.md#definecustomfetch)
- [defineGenericFetch](README.md#definegenericfetch)
- [escapeRegex](README.md#escaperegex)
- [fetchExternal](README.md#fetchexternal)
- [fetchLocal](README.md#fetchlocal)
- [filterChildren](README.md#filterchildren-1)
- [filterFromContext](README.md#filterfromcontext)
- [filterItem](README.md#filteritem)
- [identity](README.md#identity)
- [isFilterGroup](README.md#isfiltergroup)
- [log](README.md#log)
- [normalizeOrder](README.md#normalizeorder)
- [queryItemList](README.md#queryitemlist)
- [retry](README.md#retry)
- [sortItemList](README.md#sortitemlist)

## Type Aliases

### AggregateFunction

Ƭ **AggregateFunction**<`T`\>: ``"length"`` \| { `operator`: ``"length"``  } \| { `field`: keyof `T` ; `operator`: ``"median"`` \| ``"standardDeviation"`` \| ``"mean"`` \| ``"minimum"`` \| ``"maximum"`` \| ``"variance"`` \| ``"mode"``  }

Aggregation function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/AggregateFunction.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/AggregateFunction.ts#L4)

___

### AggregateFunctionOperator

Ƭ **AggregateFunctionOperator**: `Exclude`<[`AggregateFunction`](README.md#aggregatefunction)<{}\>, `string`\>[``"operator"``]

#### Defined in

[lib/types/AggregateFunctionOperator.ts:3](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/AggregateFunctionOperator.ts#L3)

___

### Any

Ƭ **Any**: `boolean` \| `string` \| `number` \| `object` \| `symbol` \| ``null`` \| `undefined` \| `any`[] \| (...`args`: `any`[]) => `any`

#### Defined in

[lib/types/Any.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Any.ts#L1)

___

### Context

Ƭ **Context**<`T`\>: { [K in keyof T]?: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Context.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Context.ts#L1)

___

### CustomFieldAggregateMap

Ƭ **CustomFieldAggregateMap**<`T`\>: `Record`<`string`, [`AggregateFunction`](README.md#aggregatefunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/CustomFieldAggregateMap.ts:3](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/CustomFieldAggregateMap.ts#L3)

___

### CustomFieldMap

Ƭ **CustomFieldMap**<`T`\>: `Record`<`string`, [`FieldFunction`](README.md#fieldfunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/CustomFieldMap.ts:3](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/CustomFieldMap.ts#L3)

___

### FieldFunction

Ƭ **FieldFunction**<`T`\>: [`FieldFunctionCustom`](README.md#fieldfunctioncustom)<`T`\> \| [`FieldFunctionFormatDate`](README.md#fieldfunctionformatdate)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/FieldFunction.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FieldFunction.ts#L4)

___

### FieldFunctionCustom

Ƭ **FieldFunctionCustom**<`T`\>: `Object`

Applies a custom field transform function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `operator` | ``"custom"`` |
| `value` | (`item`: `T`) => `any` |

#### Defined in

[lib/types/FieldFunctionCustom.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FieldFunctionCustom.ts#L4)

___

### FieldFunctionFormatDate

Ƭ **FieldFunctionFormatDate**<`T`\>: `Object`

Formats the date found in a given field, which can be an ISO string date or a timestamp.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `string` \| `number`\> |
| `format` | `string` |
| `operator` | ``"formatDate"`` |

#### Defined in

[lib/types/FieldFunctionFormatDate.ts:6](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FieldFunctionFormatDate.ts#L6)

___

### FieldFunctionReturn

Ƭ **FieldFunctionReturn**: `Object`

Return types of custom field functions.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `formatDate` | `string` |

#### Defined in

[lib/types/FieldFunctionReturn.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FieldFunctionReturn.ts#L4)

___

### Filter

Ƭ **Filter**<`T`\>: [`FilterArray`](README.md#filterarray)<`T`\> \| [`FilterBoolean`](README.md#filterboolean)<`T`\> \| [`FilterChildren`](README.md#filterchildren)<`T`\> \| [`FilterCustom`](README.md#filtercustom)<`T`\> \| [`FilterField`](README.md#filterfield)<`T`\> \| [`FilterNumber`](README.md#filternumber)<`T`\> \| [`FilterGroup`](README.md#filtergroup)<`T`\> \| [`FilterString`](README.md#filterstring)<`T`\> \| [`FilterStringIntersect`](README.md#filterstringintersect)<`T`\> \| [`FilterStringMatch`](README.md#filterstringmatch)<`T`\>

Describes a predicate for filtering items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Filter.ts:15](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Filter.ts#L15)

___

### FilterArray

Ƭ **FilterArray**<`T`, `P`\>: `Object`

Checks if a given array field matches a given array value according to a given operator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `P` | [`Any`](README.md#any) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `P`[]\> |
| `operator` | ``"equal"`` \| ``"include"`` \| ``"intersect"`` |
| `value` | `P`[] |

#### Defined in

[lib/types/FilterArray.ts:7](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterArray.ts#L7)

___

### FilterBoolean

Ƭ **FilterBoolean**<`T`\>: `Object`

Checks if a given boolean field is `true` or `false`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `boolean`\> |
| `operator` | ``"equal"`` \| ``"notEqual"`` |
| `value` | `boolean` |

#### Defined in

[lib/types/FilterBoolean.ts:6](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterBoolean.ts#L6)

___

### FilterChildren

Ƭ **FilterChildren**<`T`\>: `Object`

Matches the direct children of a specified `value` item.
If `deep` is `true`, also captures all the descendants.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[SymbolCache]?` | [`Filter`](README.md#filter)<`T`\> |
| `deep?` | `boolean` |
| `operator` | ``"children"`` |
| `value` | [`Context`](README.md#context)<`T`\> \| `string` |

#### Defined in

[lib/types/FilterChildren.ts:10](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterChildren.ts#L10)

___

### FilterCustom

Ƭ **FilterCustom**<`T`\>: `Object`

Custom filter where `value(item)` returns `true` for matching items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `operator` | ``"custom"`` |
| `value` | (`item`: `T`) => `boolean` |

#### Defined in

[lib/types/FilterCustom.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterCustom.ts#L4)

___

### FilterField

Ƭ **FilterField**<`T`\>: `Object`

Checks if a given field exists.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator` | ``"exist"`` | - |
| `value` | keyof `T` | The field name for which to check its existence. |

#### Defined in

[lib/types/FilterField.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterField.ts#L4)

___

### FilterGroup

Ƭ **FilterGroup**<`T`\>: { `operator`: ``"all"`` ; `value`: [`Filter`](README.md#filter)<`T`\>[]  } \| { `operator`: ``"any"`` \| ``"none"`` ; `value?`: [`Filter`](README.md#filter)<`T`\>[]  }

Joins a list of filters with a specific boolean operator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/FilterGroup.ts:6](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterGroup.ts#L6)

___

### FilterKeys

Ƭ **FilterKeys**<`T`, `P`\>: keyof `T` & keyof { [K in keyof T as T[K] extends P ? K : never]-?: T[K] }

Returns object type with field extending the provided `P` type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `P` | `P` |

#### Defined in

[lib/types/FilterKeys.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterKeys.ts#L4)

___

### FilterNumber

Ƭ **FilterNumber**<`T`\>: `Object`

Checks if a given number field matches a given number value according to a given operator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `number`\> |
| `operator` | ``"equal"`` \| ``"notEqual"`` \| ``"greaterThan"`` \| ``"greaterThanOrEqual"`` \| ``"lowerThan"`` \| ``"lowerThanOrEqual"`` |
| `value` | `number` |

#### Defined in

[lib/types/FilterNumber.ts:6](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterNumber.ts#L6)

___

### FilterOperator

Ƭ **FilterOperator**: [`Filter`](README.md#filter)<`never`\>[``"operator"``]

#### Defined in

[lib/types/FilterOperator.ts:3](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterOperator.ts#L3)

___

### FilterString

Ƭ **FilterString**<`T`\>: `Object`

Checks if a given string field matches a given string value according to a given operator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `string`\> |
| `locale?` | [`Locale`](README.md#locale) |
| `operator` | ``"equal"`` \| ``"notEqual"`` \| ``"startWith"`` \| ``"endWith"`` \| ``"include"`` \| ``"greaterThan"`` \| ``"greaterThanOrEqual"`` \| ``"lowerThan"`` \| ``"lowerThanOrEqual"`` |
| `options?` | `Intl.CollatorOptions` |
| `value` | `string` |

#### Defined in

[lib/types/FilterString.ts:7](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterString.ts#L7)

___

### FilterStringIntersect

Ƭ **FilterStringIntersect**<`T`\>: `Object`

Checks if a given string field has any of the provided values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `string`\> |
| `locale?` | [`Locale`](README.md#locale) |
| `operator` | ``"intersect"`` |
| `options?` | `Intl.CollatorOptions` |
| `value` | `string`[] |

#### Defined in

[lib/types/FilterStringIntersect.ts:7](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterStringIntersect.ts#L7)

___

### FilterStringMatch

Ƭ **FilterStringMatch**<`T`\>: `Object`

Checks if a given string field matches a given regular expression.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `[SymbolCache]?` | `RegExp` | Compiled regular expression generated by the `testFilter` function. |
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `string`\> | - |
| `operator` | ``"match"`` | - |
| `options?` | { `dotAll?`: `boolean` ; `ignoreCase?`: `boolean`  } | Regular expression options. |
| `options.dotAll?` | `boolean` | Allow `.` to match newlines. |
| `options.ignoreCase?` | `boolean` | Ignore casing differences if `true`. |
| `value` | `string` | Raw regular expression string. |

#### Defined in

[lib/types/FilterStringMatch.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/FilterStringMatch.ts#L8)

___

### Get

Ƭ **Get**<`T`, `K`, `D`\>: `T` extends { [key in K]: any } ? `T`[`K`] : `D`

Returns the type of the property at the specified `K` key.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` |
| `D` | `D` |

#### Defined in

[lib/types/Get.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Get.ts#L4)

___

### Group

Ƭ **Group**<`T`\>: keyof `T` \| { `field`: keyof `T`  }

Specifies how items should be grouped.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Group.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Group.ts#L4)

___

### Handler

Ƭ **Handler**<`I`, `O`, `NI`, `No`\>: (`input`: `I`, `next`: [`NextHandler`](README.md#nexthandler)<`NI`, `No`\>) => `Promise`<`O`\>

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |
| `NI` |
| `No` |

#### Type declaration

▸ (`input`, `next`): `Promise`<`O`\>

Handles an `input` query and returns an `output` promise, eventually using the `next` handler.

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `I` |
| `next` | [`NextHandler`](README.md#nexthandler)<`NI`, `No`\> |

##### Returns

`Promise`<`O`\>

#### Defined in

[lib/types/Handler.ts:6](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Handler.ts#L6)

___

### Immutable

Ƭ **Immutable**<`T`\>: { readonly [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Immutable.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Immutable.ts#L1)

___

### InjectCustomFields

Ƭ **InjectCustomFields**<`T`, `C`\>: `C` extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> ? { readonly [K in keyof T \| keyof C]: K extends keyof T ? T[K] : K extends keyof C ? C[K] extends FieldFunctionCustom<T\> ? ReturnType<C[K]["value"]\> : C[K]["operator"] extends keyof FieldFunctionReturn ? FieldFunctionReturn[C[K]["operator"]] : never : never } : `T`

Injects the custom fields into the entity type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> \| `undefined` |

#### Defined in

[lib/types/InjectCustomFields.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/InjectCustomFields.ts#L8)

___

### Item

Ƭ **Item**<`T`, `S`\>: `T` extends infer I[] ? `I` : `T` extends `ReadonlyArray`<infer I\> ? `I` : `S`

Returns the inferred item type of an array, or an alternative type if it is something else (e.g., `undefined`).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | `undefined` |

#### Defined in

[lib/types/Item.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Item.ts#L4)

___

### Key

Ƭ **Key**: `string` \| `number` \| `symbol`

#### Defined in

[lib/types/Key.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Key.ts#L1)

___

### Locale

Ƭ **Locale**: `string` \| `string`[]

#### Defined in

[lib/types/Locale.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Locale.ts#L1)

___

### Mutable

Ƭ **Mutable**<`T`\>: { -readonly [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Mutable.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Mutable.ts#L1)

___

### NextHandler

Ƭ **NextHandler**<`I`, `R`\>: (`input`: `I`) => `Promise`<`R`\>

#### Type parameters

| Name |
| :------ |
| `I` |
| `R` |

#### Type declaration

▸ (`input`): `Promise`<`R`\>

Handles an `input` query and returns an `output` promise.

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `I` |

##### Returns

`Promise`<`R`\>

#### Defined in

[lib/types/NextHandler.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/NextHandler.ts#L4)

___

### Order

Ƭ **Order**<`T`\>: keyof `T` \| { `descending?`: `boolean` ; `field`: keyof `T`  }

Order item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Order.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Order.ts#L4)

___

### Parameters

Ƭ **Parameters**: `Record`<`string`, `string` \| `string`[] \| `number` \| `number`[]\>

#### Defined in

[lib/types/Parameters.ts:1](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Parameters.ts#L1)

___

### Query

Ƭ **Query**<`T`\>: [`QueryRead`](README.md#queryread)<`T`\> \| [`QueryReadMultiple`](README.md#queryreadmultiple)<`T`\> \| [`QueryCreate`](README.md#querycreate)<`T`\> \| [`QueryCreateMultiple`](README.md#querycreatemultiple)<`T`\> \| [`QueryUpdate`](README.md#queryupdate)<`T`\> \| [`QueryUpdateMultiple`](README.md#queryupdatemultiple)<`T`\> \| [`QueryDelete`](README.md#querydelete)<`T`\> \| [`QueryDeleteMultiple`](README.md#querydeletemultiple)<`T`\> \| [`QueryAggregate`](README.md#queryaggregate)<`T`\>

Query that fetches or mutates an entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types/Query.ts:14](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Query.ts#L14)

___

### QueryAggregate

Ƭ **QueryAggregate**<`T`\>: `Object`

Query for computing an aggregated value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `aggregator` | [`AggregateFunction`](README.md#aggregatefunction)<`T`\> | - |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the item. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | - |
| `method` | ``"aggregate"`` | - |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |

#### Defined in

[lib/types/QueryAggregate.ts:10](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryAggregate.ts#L10)

___

### QueryCreate

Ƭ **QueryCreate**<`T`\>: `Object`

Query for creating an item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to create the item. |
| `method` | ``"create"`` | - |
| `multiple?` | ``false`` | - |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |
| `value` | `Partial`<`T`\> | Value properties of the item to create. |

#### Defined in

[lib/types/QueryCreate.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryCreate.ts#L8)

___

### QueryCreateMultiple

Ƭ **QueryCreateMultiple**<`T`\>: `Object`

Query for creating multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to create the items. |
| `method` | ``"create"`` | - |
| `multiple` | ``true`` | - |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |
| `value` | `Partial`<`T`\>[] | - |

#### Defined in

[lib/types/QueryCreateMultiple.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryCreateMultiple.ts#L8)

___

### QueryDelete

Ƭ **QueryDelete**<`T`\>: `Object`

Query for deleting an item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to delete the item. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | - |
| `method` | ``"delete"`` | - |
| `multiple?` | ``false`` | - |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |

#### Defined in

[lib/types/QueryDelete.ts:9](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryDelete.ts#L9)

___

### QueryDeleteMultiple

Ƭ **QueryDeleteMultiple**<`T`\>: `Object`

Query for deleting multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to delete the item. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | - |
| `method` | ``"delete"`` | - |
| `multiple` | ``true`` | - |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |

#### Defined in

[lib/types/QueryDeleteMultiple.ts:9](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryDeleteMultiple.ts#L9)

___

### QueryMethod

Ƭ **QueryMethod**: `Exclude`<[`Query`](README.md#query)<`never`\>[``"method"``], `undefined`\>

Available query methods.

#### Defined in

[lib/types/QueryMethod.ts:6](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryMethod.ts#L6)

___

### QueryRead

Ƭ **QueryRead**<`T`\>: `Object`

Query for reading a single item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to delete the item. |
| `fields?` | readonly keyof `T`[] | Item fields to pick. If omitted, all fields are picked. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | Filter for finding the item, if it cannot be found based on the `context`. |
| `group?` | `never` | - |
| `limit?` | `never` | - |
| `method?` | ``"read"`` | - |
| `multiple?` | ``false`` | - |
| `offset?` | `never` | - |
| `order?` | [`Order`](README.md#order)<`T`\>[] | Order by which the items should be sorted. |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |

#### Defined in

[lib/types/QueryRead.ts:10](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryRead.ts#L10)

___

### QueryReadMultiple

Ƭ **QueryReadMultiple**<`T`\>: `Object`

Query for getting a list of items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the item. |
| `fields?` | readonly keyof `T`[] | Item fields to pick. If omitted, all fields are picked. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | Filter that picks the items. |
| `group?` | [`Group`](README.md#group)<`T`\>[] | Groups items by specified fields. |
| `limit?` | `number` | Upper bound of the number of items to return. |
| `method?` | ``"read"`` | - |
| `multiple` | ``true`` | - |
| `offset?` | `number` | Offset of the first matching item. |
| `order?` | [`Order`](README.md#order)<`T`\>[] | Order by which the items should be sorted. |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |

#### Defined in

[lib/types/QueryReadMultiple.ts:11](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryReadMultiple.ts#L11)

___

### QuerySettings

Ƭ **QuerySettings**<`T`\>: `Object`

Settings to use when doing a query.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathFieldKey?` | [`FilterKeys`](README.md#filterkeys)<`T`, `string`\> | Field key to that contains the path value of an item. |
| `pathFieldSeparator?` | `string` | String used to separate the path nodes of an item. |
| `signal?` | `AbortSignal` | Abort signal to abort the query. |
| `transformFilterChildren?` | (`filter`: [`FilterChildren`](README.md#filterchildren)<`T`\>) => `Exclude`<[`Filter`](README.md#filter)<`T`\>, { `operator`: ``"children"``  }\> | Returns a filter that captures the items expressed by the provided `FilterChildren`. The return filter cannot use filters of type `FilterChildren`. |

#### Defined in

[lib/types/QuerySettings.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QuerySettings.ts#L8)

___

### QueryUpdate

Ƭ **QueryUpdate**<`T`\>: `Object`

Query for updating an item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to update the item. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | Filter for finding the item, if it cannot be found based on the `context`. |
| `group?` | `never` | - |
| `method` | ``"update"`` | - |
| `multiple?` | ``false`` | - |
| `offset?` | `never` | - |
| `order` | `never` | - |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |
| `value` | `Partial`<`T`\> | Partial property values to update. |

#### Defined in

[lib/types/QueryUpdate.ts:9](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryUpdate.ts#L9)

___

### QueryUpdateMultiple

Ƭ **QueryUpdateMultiple**<`T`\>: `Object`

Query for updating multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the context in which to update the item. |
| `filter?` | [`Filter`](README.md#filter)<`T`\> | - |
| `limit?` | `number` | Sets the upper bound of the number of items to update. |
| `method` | ``"update"`` | - |
| `multiple` | ``true`` | - |
| `offset?` | `number` | Offset of the first matching item to update. |
| `order?` | [`Order`](README.md#order)<`T`\>[] | Order by which the items should be sorted. |
| `parameters?` | [`Parameters`](README.md#parameters) | Query parameters. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Query settings. |
| `value` | `Partial`<`T`\>[] | Partial property values to update. |

#### Defined in

[lib/types/QueryUpdateMultiple.ts:10](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/QueryUpdateMultiple.ts#L10)

___

### Result

Ƭ **Result**<`T`, `Q`\>: [`Q`] extends [{ `method`: ``"read"``  }] ? [`Q`] extends [{ `multiple`: ``true``  }] ? `ResultRead`<`T`, `Q`\>[] : `ResultRead`<`T`, `Q`\> : [`Q`] extends [{ `method`: ``"aggregate"``  }] ? `number` : [`Q`] extends [{ `multiple`: ``true``  }] ? `ResultRead`<`T`, `Q`\>[] : `ResultRead`<`T`, `Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

#### Defined in

[lib/types/Result.ts:20](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Result.ts#L20)

___

### Store

Ƭ **Store**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`key`: `string`) => `Promise`<`void`\> |
| `get` | (`key`: `string`) => `Promise`<`T`\> |
| `has` | (`key`: `string`) => `Promise`<`boolean`\> |
| `set` | (`key`: `string`, `value`: `T`) => `Promise`<`void`\> |

#### Defined in

[lib/types/Store.ts:2](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/Store.ts#L2)

## Functions

### aggregate

▸ **aggregate**<`I`, `O`, `In`, `On`\>(`options`): [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

Aggregates multiple incoming query calls into one query.
Queries are grouped according to the string key returned by `queryGroupId(query)`. Inside a group, each query is identified with `queryId(query)`.
The aggregated query is built from the object returned by `queryForGroup(queryList, groupId)`, after at least `delay` milliseconds after the first non-aggregated aggregatable query call.
When the aggregated query resolves, the result is dispatched back to each aggregatable query call of the category by dispatching the result for each query returned by `resultForQuery(result, query)`.
If a query occurs twice, `mergeQuery(query, currentQuery)` is called and the output replaces the previous query.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Object` |
| `O` | `O` |
| `In` | extends `Object` |
| `On` | `On` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay?` | `number` |
| `options.mergeQuery?` | (`query`: `I`, `currentQuery`: `I`) => `I` |
| `options.queryForGroup` | (`queryList`: `I`[], `group`: `string`) => `Object` |
| `options.queryGroupId?` | (`query`: `I`) => `undefined` \| `string` |
| `options.queryId?` | (`query`: `I`) => `undefined` \| `string` |
| `options.resultForQuery` | (`resultList`: `O`[], `query`: `I`) => `O` |

#### Returns

[`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

#### Defined in

[lib/middlewares/aggregate.ts:16](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/aggregate.ts#L16)

___

### branch

▸ **branch**<`I`, `O`, `In`, `On`\>(`condition`, `left`, `right?`): [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

Dispatches an incoming query to `left` if `condition(query)` returns a truthy value, `right` otherwise. This is helpful for sending queries to different resolvers.

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |
| `In` |
| `On` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | (`input`: `I`) => `boolean` |
| `left` | [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\> |
| `right` | [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\> |

#### Returns

[`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

**`Example`**

```typescript
const customFetch = combine(
  branch(query => query.protocol === 'gql', gqlHandlers),
  restHandlers,
)
```

#### Defined in

[lib/middlewares/branch.ts:21](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/branch.ts#L21)

___

### cache

▸ **cache**<`I`, `O`, `In`, `On`\>(`«destructured»`): [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Object` |
| `O` | `O` |
| `In` | extends [`Query`](README.md#query)<`any`\> |
| `On` | `On` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | - |
| › `extendCachedQuery` | (`query`: `I`, `cachedQuery`: `I`) => `undefined` \| `I` | Returns a query that completes the cached value. Returns `undefined` if the query should not be completed. |
| › `invalidatesItem` | (`query`: `I`, `cachedQuery`: `I`, `cachedValue`: `any`) => `boolean` | Returns `true` if the cached item must be invalidated. |
| › `itemId?` | (`query`: `I`) => `undefined` \| `string` | Unique identifier for the item to cache. Returns `undefined` if the item should not be cached. |
| › `mergeItem` | (`value`: `any`, `cachedValue`: `any`, `query`: `I`, `cachedQuery`: `I`) => `any` | Merges the value from the extended query with the cached value. Only called when `extendCachedQuery` returns a query. |
| › `mergeQuery` | (`extendedQuery`: `I`, `cachedQuery`: `I`) => `I` | Merges the extended query with the cached query. Only called when `extendCachedQuery` returns a query. |
| › `store` | [`Store`](README.md#store)<`CachedItem`<`I`\>\> | Cache store. |

#### Returns

[`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

#### Defined in

[lib/middlewares/cache.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/cache.ts#L8)

___

### combine

▸ **combine**<`I0`, `O0`, `I1`, `O1`, `I2`, `O2`, `I3`, `O3`, `I4`, `O4`, `I5`, `O5`, `I6`, `O6`, `I7`, `O7`, `I8`, `O8`, `I9`, `O9`, `I10`, `O10`, `I11`, `O11`, `I12`, `O12`, `I13`, `O13`, `I14`, `O14`, `I15`, `O15`, `I16`, `O16`, `I17`, `O17`, `I18`, `O18`, `I19`, `O19`, `I20`, `O20`, `I21`, `O21`\>(`...handlerList`): [`Handler`](README.md#handler)<`I0`, `O0`, `I21`, `O21`\>

Combines the provided handler into a single handler.

#### Type parameters

| Name |
| :------ |
| `I0` |
| `O0` |
| `I1` |
| `O1` |
| `I2` |
| `O2` |
| `I3` |
| `O3` |
| `I4` |
| `O4` |
| `I5` |
| `O5` |
| `I6` |
| `O6` |
| `I7` |
| `O7` |
| `I8` |
| `O8` |
| `I9` |
| `O9` |
| `I10` |
| `O10` |
| `I11` |
| `O11` |
| `I12` |
| `O12` |
| `I13` |
| `O13` |
| `I14` |
| `O14` |
| `I15` |
| `O15` |
| `I16` |
| `O16` |
| `I17` |
| `O17` |
| `I18` |
| `O18` |
| `I19` |
| `O19` |
| `I20` |
| `O20` |
| `I21` |
| `O21` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...handlerList` | readonly [[`Handler`](README.md#handler)<`I0`, `O0`, `I1`, `O1`\>, [`Handler`](README.md#handler)<`I1`, `O1`, `I2`, `O2`\>, `undefined` \| [`Handler`](README.md#handler)<`I2`, `O2`, `I3`, `O3`\>, `undefined` \| [`Handler`](README.md#handler)<`I3`, `O3`, `I4`, `O4`\>, `undefined` \| [`Handler`](README.md#handler)<`I4`, `O4`, `I5`, `O5`\>, `undefined` \| [`Handler`](README.md#handler)<`I5`, `O5`, `I6`, `O6`\>, `undefined` \| [`Handler`](README.md#handler)<`I6`, `O6`, `I7`, `O7`\>, `undefined` \| [`Handler`](README.md#handler)<`I7`, `O7`, `I8`, `O8`\>, `undefined` \| [`Handler`](README.md#handler)<`I8`, `O8`, `I9`, `O9`\>, `undefined` \| [`Handler`](README.md#handler)<`I9`, `O9`, `I10`, `O10`\>, `undefined` \| [`Handler`](README.md#handler)<`I10`, `O10`, `I11`, `O11`\>, `undefined` \| [`Handler`](README.md#handler)<`I11`, `O11`, `I12`, `O12`\>, `undefined` \| [`Handler`](README.md#handler)<`I12`, `O12`, `I13`, `O13`\>, `undefined` \| [`Handler`](README.md#handler)<`I13`, `O13`, `I14`, `O14`\>, `undefined` \| [`Handler`](README.md#handler)<`I14`, `O14`, `I15`, `O15`\>, `undefined` \| [`Handler`](README.md#handler)<`I15`, `O15`, `I16`, `O16`\>, `undefined` \| [`Handler`](README.md#handler)<`I16`, `O16`, `I17`, `O17`\>, `undefined` \| [`Handler`](README.md#handler)<`I17`, `O17`, `I18`, `O18`\>, `undefined` \| [`Handler`](README.md#handler)<`I18`, `O18`, `I19`, `O19`\>, `undefined` \| [`Handler`](README.md#handler)<`I19`, `O19`, `I20`, `O20`\>, `undefined` \| [`Handler`](README.md#handler)<`I20`, `O20`, `I21`, `O21`\>] | List of handlers to combine. |

#### Returns

[`Handler`](README.md#handler)<`I0`, `O0`, `I21`, `O21`\>

Handler that combines all provided handlers.

#### Defined in

[lib/middlewares/combine.ts:801](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/combine.ts#L801)

___

### cork

▸ **cork**(`input`): `Promise`<`never`\>

Uncallable handler used to terminate a sequence of handlers combined with `combine`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `never` |

#### Returns

`Promise`<`never`\>

#### Defined in

[lib/types/NextHandler.ts:4](https://github.com/nevoland/quetch/blob/fbf3307/lib/types/NextHandler.ts#L4)

___

### defineCheckQuery

▸ **defineCheckQuery**<`M`\>(): <T, Q\>(`query`: `Q` & { `type`: `T`[]  }) => typeof `query`<K, T, Q\>(`query`: `Q` & { `type`: `K`  }) => typeof `query`

Returns a function that checks queries. This is useful to prevent the query to have its type being narrowed if declared outside of a custom fetcher function argument.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Record`<`string`, `object`\> |

#### Returns

`fn`

Function that checks queries.

▸ <`T`, `Q`\>(`query`): typeof `query`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `type`: `T`[]  } |

##### Returns

typeof `query`

▸ <`K`, `T`, `Q`\>(`query`): typeof `query`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `T` | extends `object` |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `type`: `K`  } |

##### Returns

typeof `query`

#### Defined in

[lib/tools/defineCheckQuery.ts:8](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/defineCheckQuery.ts#L8)

___

### defineCustomFetch

▸ **defineCustomFetch**<`M`\>(`handler`): <K, T, Q\>(`query`: `Q` & { `type`: `K`  }) => `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\><T, Q\>(`type`: `T`[], `query`: `Q`) => `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

Returns a custom fetch function that handles a `query`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Record`<`string`, `object`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`Handler`](README.md#handler)<`Object`, `any`, `never`, `never`\> | The query handler. |

#### Returns

`fn`

A custom fetch function.

▸ <`K`, `T`, `Q`\>(`query`): `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `T` | extends `object` |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `type`: `K`  } |

##### Returns

`Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

▸ <`T`, `Q`\>(`type`, `query`): `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T`[] |
| `query` | `Q` |

##### Returns

`Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

#### Defined in

[lib/tools/defineCustomFetch.ts:11](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/defineCustomFetch.ts#L11)

___

### defineGenericFetch

▸ **defineGenericFetch**<`K`\>(`handler`): <T\>() => <Q\>(`query`: `Q` & { `type`: `K` \| `T`[]  }) => `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

Returns a generic fetch function that has to be called like this:
```ts
genericFetch<T>()(query)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`Handler`](README.md#handler)<`Object`, `any`, `never`, `never`\> | The query handler. |

#### Returns

`fn`

A curried generic fetch function.

▸ <`T`\>(): <Q\>(`query`: `Q` & { `type`: `K` \| `T`[]  }) => `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

##### Returns

`fn`

▸ <`Q`\>(`query`): `Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `type`: `K` \| `T`[]  } |

##### Returns

`Promise`<[`Result`](README.md#result)<`T`, `Q`\>\>

#### Defined in

[lib/tools/defineGenericFetch.ts:14](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/defineGenericFetch.ts#L14)

___

### escapeRegex

▸ **escapeRegex**(`pattern`): `string`

Escapes special characters of a given regular expresion `pattern`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | Regular expression string to escape. |

#### Returns

`string`

Escaped regular expression

#### Defined in

[lib/tools/escapeRegex.ts:7](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/escapeRegex.ts#L7)

___

### fetchExternal

▸ **fetchExternal**(`fetch?`): [`Handler`](README.md#handler)<`Request`, `Response`, `never`, `never`\>

Calls the provided `fetch` function, which defaults to the DOM `fetch` function, with the incoming `query`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fetch` | (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\> | [MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch) |

#### Returns

[`Handler`](README.md#handler)<`Request`, `Response`, `never`, `never`\>

Handler that returns a promise that resolves to the response.

#### Defined in

[lib/middlewares/fetchExternal.ts:12](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/fetchExternal.ts#L12)

___

### fetchLocal

▸ **fetchLocal**<`T`\>(): [`Handler`](README.md#handler)<[`Query`](README.md#query)<`T`\> & { `type`: `T`[]  }, `any`, `never`, `never`\>

Performs the fetch query on local data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Returns

[`Handler`](README.md#handler)<[`Query`](README.md#query)<`T`\> & { `type`: `T`[]  }, `any`, `never`, `never`\>

Promise that resolves to the response.

#### Defined in

[lib/middlewares/fetchLocal.ts:9](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/fetchLocal.ts#L9)

___

### filterChildren

▸ **filterChildren**<`T`\>(`parentPath`, `pathFieldKey`, `deep?`, `pathSeparator?`): [`Filter`](README.md#filter)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `parentPath` | `string` | `undefined` |
| `pathFieldKey` | [`FilterKeys`](README.md#filterkeys)<`T`, `string`\> | `undefined` |
| `deep` | `boolean` | `false` |
| `pathSeparator` | `string` | `"/"` |

#### Returns

[`Filter`](README.md#filter)<`T`\>

#### Defined in

[lib/tools/filterChildren.ts:5](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/filterChildren.ts#L5)

___

### filterFromContext

▸ **filterFromContext**<`T`\>(`context`): [`Filter`](README.md#filter)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Context`](README.md#context)<`T`\> |

#### Returns

[`Filter`](README.md#filter)<`T`\>

#### Defined in

[lib/tools/filterFromContext.ts:5](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/filterFromContext.ts#L5)

___

### filterItem

▸ **filterItem**<`T`\>(`filter`, `value`, `settings?`): `boolean`

Checks wether the provided `value` matches the `filter` or not.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `undefined` \| [`Filter`](README.md#filter)<`T`\> | The filter to apply. |
| `value` | `undefined` \| `T` | The value to check. |
| `settings?` | [`QuerySettings`](README.md#querysettings)<`T`\> | Optional query settings. |

#### Returns

`boolean`

`true` if the `value` matches the `filter` and `false` otherwise.

#### Defined in

[lib/tools/filterItem.ts:17](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/filterItem.ts#L17)

___

### identity

▸ **identity**<`I`, `O`, `In`, `On`\>(`input`, `next`): `Promise`<`O`\>

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |
| `In` |
| `On` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `I` |
| `next` | [`NextHandler`](README.md#nexthandler)<`In`, `On`\> |

#### Returns

`Promise`<`O`\>

#### Defined in

[lib/middlewares/identity.ts:3](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/identity.ts#L3)

___

### isFilterGroup

▸ **isFilterGroup**<`T`\>(`value`): value is FilterGroup<T\>

Returns `true` if the provided filter `value` is a group filter or not.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `undefined` \| [`Filter`](README.md#filter)<`T`\> | The filter to test. |

#### Returns

value is FilterGroup<T\>

Whether the provided filter is a group filter or not.

#### Defined in

[lib/tools/isFilterGroup.ts:9](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/isFilterGroup.ts#L9)

___

### log

▸ **log**<`I`, `O`, `In`, `On`\>(`title?`): [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

Logs the outgoing query and the incoming result or the error.

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |
| `In` |
| `On` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `"Query"` |

#### Returns

[`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

Query handler

#### Defined in

[lib/middlewares/log.ts:13](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/log.ts#L13)

___

### normalizeOrder

▸ **normalizeOrder**<`T`\>(`order`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | [`Order`](README.md#order)<`T`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `descending?` | `boolean` |
| `field` | keyof `T` |

#### Defined in

[lib/tools/normalizeOrder.ts:3](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/normalizeOrder.ts#L3)

___

### queryItemList

▸ **queryItemList**<`T`, `Q`\>(`query`): [`Result`](README.md#result)<`T`, `Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `Q` | extends [`Query`](README.md#query)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `type`: `T`[]  } |

#### Returns

[`Result`](README.md#result)<`T`, `Q`\>

#### Defined in

[lib/tools/queryItemList.ts:41](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/queryItemList.ts#L41)

___

### retry

▸ **retry**(`options?`): [`Handler`](README.md#handler)<`Request`, `Response`, `Request`, `Response`\>

Retries a failed query call up to `amount` times, with a given `delay` in milliseconds at ±`delayDelta` milliseconds.
Note that an `amount` set to `Infinity` results in indefinitely trying to resolve a query call.
Only instances of `RequestError` that do not result in a `500` status error will result in new tries. Other errors will propagate immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.amount` | `undefined` \| `number` |
| `options.delay` | `undefined` \| `number` |
| `options.delayDelta` | `undefined` \| `number` |

#### Returns

[`Handler`](README.md#handler)<`Request`, `Response`, `Request`, `Response`\>

Handler

#### Defined in

[lib/middlewares/retry.ts:15](https://github.com/nevoland/quetch/blob/fbf3307/lib/middlewares/retry.ts#L15)

___

### sortItemList

▸ **sortItemList**<`T`\>(`orderList`, `value`): `T`[]

Sorts provided `value` array *in place* according to the `orderList`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderList` | `undefined` \| [`Order`](README.md#order)<`T`\>[] | The order to use for sorting. |
| `value` | `T`[] | The array to sort. |

#### Returns

`T`[]

The same array sorted in place.

#### Defined in

[lib/tools/sortItemList.ts:12](https://github.com/nevoland/quetch/blob/fbf3307/lib/tools/sortItemList.ts#L12)
