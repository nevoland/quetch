quetch

# quetch

## Table of contents

### Type Aliases

- [AggregateFunction](README.md#aggregatefunction)
- [AggregateFunctionOperator](README.md#aggregatefunctionoperator)
- [Any](README.md#any)
- [AnyQuery](README.md#anyquery)
- [AnyQueryExternal](README.md#anyqueryexternal)
- [AnyQueryLocal](README.md#anyquerylocal)
- [Context](README.md#context)
- [CustomFieldMap](README.md#customfieldmap)
- [EntityItem](README.md#entityitem)
- [FieldFunction](README.md#fieldfunction)
- [FieldFunctionCustom](README.md#fieldfunctioncustom)
- [FieldFunctionFormatDate](README.md#fieldfunctionformatdate)
- [FieldFunctionOperator](README.md#fieldfunctionoperator)
- [FieldFunctionReturn](README.md#fieldfunctionreturn)
- [Filter](README.md#filter)
- [FilterArray](README.md#filterarray)
- [FilterBoolean](README.md#filterboolean)
- [FilterField](README.md#filterfield)
- [FilterKeys](README.md#filterkeys)
- [FilterList](README.md#filterlist)
- [FilterNumber](README.md#filternumber)
- [FilterOperator](README.md#filteroperator)
- [FilterString](README.md#filterstring)
- [FilterStringIntersect](README.md#filterstringintersect)
- [FilterStringMatch](README.md#filterstringmatch)
- [Handler](README.md#handler)
- [NextHandler](README.md#nexthandler)
- [Order](README.md#order)
- [Query](README.md#query)
- [QueryAggregate](README.md#queryaggregate)
- [QueryBase](README.md#querybase)
- [QueryCreate](README.md#querycreate)
- [QueryCreateMultiple](README.md#querycreatemultiple)
- [QueryDelete](README.md#querydelete)
- [QueryDeleteMultiple](README.md#querydeletemultiple)
- [QueryGet](README.md#queryget)
- [QueryGetMultiple](README.md#querygetmultiple)
- [QueryMethod](README.md#querymethod)
- [QueryUpdate](README.md#queryupdate)
- [QueryUpdateMultiple](README.md#queryupdatemultiple)
- [Store](README.md#store)

### Functions

- [aggregate](README.md#aggregate)
- [branch](README.md#branch)
- [cache](README.md#cache)
- [combine](README.md#combine)
- [defineCheckQuery](README.md#definecheckquery)
- [defineCustomFetch](README.md#definecustomfetch)
- [fetchExternal](README.md#fetchexternal)
- [fetchLocal](README.md#fetchlocal)
- [filterFromContext](README.md#filterfromcontext)
- [filterItem](README.md#filteritem)
- [identity](README.md#identity)
- [impasse](README.md#impasse)
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

[lib/types.ts:387](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L387)

___

### AggregateFunctionOperator

Ƭ **AggregateFunctionOperator**: `Exclude`<[`AggregateFunction`](README.md#aggregatefunction)<{}\>, `string`\>[``"operator"``]

#### Defined in

[lib/types.ts:402](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L402)

___

### Any

Ƭ **Any**: `boolean` \| `string` \| `number` \| `object` \| `symbol` \| ``null`` \| `undefined` \| `any`[] \| (...`args`: `any`[]) => `any`

#### Defined in

[lib/types.ts:1](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L1)

___

### AnyQuery

Ƭ **AnyQuery**: [`Query`](README.md#query)<`any`, `any`\>

#### Defined in

[lib/types.ts:92](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L92)

___

### AnyQueryExternal

Ƭ **AnyQueryExternal**: `Omit`<[`Query`](README.md#query)<`any`, `any`\>, ``"type"``\> & { `type`: `string`  }

#### Defined in

[lib/types.ts:94](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L94)

___

### AnyQueryLocal

Ƭ **AnyQueryLocal**: `Omit`<[`Query`](README.md#query)<`any`, `any`\>, ``"type"``\> & { `type`: `object`[]  }

#### Defined in

[lib/types.ts:96](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L96)

___

### Context

Ƭ **Context**<`T`\>: { [K in keyof T]?: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:98](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L98)

___

### CustomFieldMap

Ƭ **CustomFieldMap**<`T`\>: `Record`<`string`, [`FieldFunction`](README.md#fieldfunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:382](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L382)

___

### EntityItem

Ƭ **EntityItem**<`E`, `C`, `Q`\>: `Q` extends { `customFields`: [`CustomFieldMap`](README.md#customfieldmap)<`E`\>  } ? { readonly [K in ArrayItem<Get<Q, "fields", undefined\>, keyof E \| keyof Q["customFields"]\>]: K extends keyof E ? E[K] : K extends keyof Q["customFields"] ? Q["customFields"][K] extends FieldFunctionCustom<E\> ? ReturnType<Q["customFields"][K]["value"]\> : Q["customFields"][K]["operator"] extends keyof FieldFunctionReturn ? FieldFunctionReturn[Q["customFields"][K]["operator"]] : never : never } : { readonly [K in ArrayItem<Get<Q, "fields", undefined\>, keyof E\>]: K extends keyof E ? E[K] : never }

Entity type for a given query.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`E`\> |
| `Q` | extends [`Query`](README.md#query)<`E`, `C`\> |

#### Defined in

[lib/types.ts:49](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L49)

___

### FieldFunction

Ƭ **FieldFunction**<`T`\>: [`FieldFunctionCustom`](README.md#fieldfunctioncustom)<`T`\> \| [`FieldFunctionFormatDate`](README.md#fieldfunctionformatdate)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:349](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L349)

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

[lib/types.ts:356](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L356)

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

[lib/types.ts:364](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L364)

___

### FieldFunctionOperator

Ƭ **FieldFunctionOperator**: [`FieldFunction`](README.md#fieldfunction)<`never`\>[``"operator"``]

Possible field function operators.

#### Defined in

[lib/types.ts:373](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L373)

___

### FieldFunctionReturn

Ƭ **FieldFunctionReturn**: `Object`

Return types of custom field functions.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `formatDate` | `string` |

#### Defined in

[lib/types.ts:378](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L378)

___

### Filter

Ƭ **Filter**<`T`\>: [`FilterList`](README.md#filterlist)<`T`\> \| [`FilterField`](README.md#filterfield)<`T`\> \| [`FilterBoolean`](README.md#filterboolean)<`T`\> \| [`FilterString`](README.md#filterstring)<`T`\> \| [`FilterStringMatch`](README.md#filterstringmatch)<`T`\> \| [`FilterStringIntersect`](README.md#filterstringintersect)<`T`\> \| [`FilterNumber`](README.md#filternumber)<`T`\> \| [`FilterArray`](README.md#filterarray)<`T`\>

Describes a predicate for filtering items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:422](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L422)

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

[lib/types.ts:550](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L550)

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

[lib/types.ts:470](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L470)

___

### FilterField

Ƭ **FilterField**<`T`\>: `Object`

Checks if a given field exists.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `field` | keyof `T` |
| `operator` | ``"exist"`` |

#### Defined in

[lib/types.ts:462](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L462)

___

### FilterKeys

Ƭ **FilterKeys**<`T`, `P`\>: { [K in keyof T]-?: T[K] extends P ? K : never }[keyof `T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `P` | `P` |

#### Defined in

[lib/types.ts:345](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L345)

___

### FilterList

Ƭ **FilterList**<`T`\>: { `operator`: ``"all"`` ; `value`: [`Filter`](README.md#filter)<`T`\>[]  } \| { `operator`: ``"any"`` \| ``"none"`` ; `value?`: [`Filter`](README.md#filter)<`T`\>[]  }

Joins a list of filters with a specific boolean operator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:437](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L437)

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

[lib/types.ts:535](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L535)

___

### FilterOperator

Ƭ **FilterOperator**: [`Filter`](README.md#filter)<`never`\>[``"operator"``]

#### Defined in

[lib/types.ts:432](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L432)

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
| `operator` | ``"equal"`` \| ``"notEqual"`` \| ``"startWith"`` \| ``"endWith"`` \| ``"include"`` \| ``"greaterThan"`` \| ``"greaterThanOrEqual"`` \| ``"lowerThan"`` \| ``"lowerThanOrEqual"`` |
| `value` | `string` |

#### Defined in

[lib/types.ts:479](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L479)

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
| `operator` | ``"intersect"`` |
| `value` | `string`[] |

#### Defined in

[lib/types.ts:526](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L526)

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
| `field` | [`FilterKeys`](README.md#filterkeys)<`T`, `string`\> | - |
| `operator` | ``"match"`` | - |
| `options?` | { `dotAll?`: `boolean` ; `ignoreCase?`: `boolean`  } | Regular expression options. |
| `options.dotAll?` | `boolean` | Allows . to match newlines. |
| `options.ignoreCase?` | `boolean` | When matching, casing differences are ignored. |
| `regularExpression?` | `RegExp` | Compiled regular expression generated by the `testFilter` function. |
| `value` | `string` | Raw regular expression string. |

#### Defined in

[lib/types.ts:497](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L497)

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

[lib/types.ts:23](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L23)

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

[lib/types.ts:31](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L31)

___

### Order

Ƭ **Order**<`T`\>: keyof `T` \| { `descending?`: `boolean` ; `field`: keyof `T`  }

Order item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:338](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L338)

___

### Query

Ƭ **Query**<`T`, `C`\>: [`QueryGet`](README.md#queryget)<`T`, `C`\> \| [`QueryGetMultiple`](README.md#querygetmultiple)<`T`, `C`\> \| [`QueryCreate`](README.md#querycreate)<`T`\> \| [`QueryCreateMultiple`](README.md#querycreatemultiple)<`T`\> \| [`QueryUpdate`](README.md#queryupdate)<`T`, `C`\> \| [`QueryUpdateMultiple`](README.md#queryupdatemultiple)<`T`, `C`\> \| [`QueryDelete`](README.md#querydelete)<`T`\> \| [`QueryDeleteMultiple`](README.md#querydeletemultiple)<`T`\> \| [`QueryAggregate`](README.md#queryaggregate)<`T`\>

Query that fetches or mutates an entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Defined in

[lib/types.ts:80](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L80)

___

### QueryAggregate

Ƭ **QueryAggregate**<`T`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `aggregator`: [`AggregateFunction`](README.md#aggregatefunction)<`T`\> ; `filter?`: [`Filter`](README.md#filter)<`T`\> ; `method`: ``"aggregate"``  }

Query for computing an aggregated value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:329](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L329)

___

### QueryBase

Ƭ **QueryBase**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | [`Context`](README.md#context)<`T`\> | Common item properties to use for identifying the item. **`Example`** ```typescript { context: { id: "000001" } } { context: { organisation: "World Company" } } ``` |
| `signal?` | `AbortSignal` | Abort signal to abort the request. |
| `type` | `string` \| `T`[] | - |

#### Defined in

[lib/types.ts:102](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L102)

___

### QueryCreate

Ƭ **QueryCreate**<`T`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `method`: ``"create"`` ; `value`: `Partial`<`T`\>  }

Query for creating an item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:244](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L244)

___

### QueryCreateMultiple

Ƭ **QueryCreateMultiple**<`T`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `method`: ``"create"`` ; `multiple`: ``true`` ; `value`: `Partial`<`T`\>[]  }

Query for creating multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:252](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L252)

___

### QueryDelete

Ƭ **QueryDelete**<`T`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `filter?`: [`Filter`](README.md#filter)<`T`\> ; `method`: ``"delete"``  }

Query for deleting an item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:312](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L312)

___

### QueryDeleteMultiple

Ƭ **QueryDeleteMultiple**<`T`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `filter?`: [`Filter`](README.md#filter)<`T`\> ; `method`: ``"delete"`` ; `multiple`: ``true``  }

Query for deleting multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[lib/types.ts:320](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L320)

___

### QueryGet

Ƭ **QueryGet**<`T`, `C`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `groupBy?`: `never` ; `method?`: ``"get"`` ; `multiple?`: ``false`` ; `offset?`: `never` ; `orderBy?`: `never`  } & { `customFields`: `C` ; `fields?`: readonly keyof `InjectCustomField`<`T`, `C`\>[] ; `filter?`: [`Filter`](README.md#filter)<`InjectCustomField`<`T`, `C`\>\>  } \| { `customFields?`: `never` ; `fields?`: readonly keyof `T`[] ; `filter?`: [`Filter`](README.md#filter)<`T`\>  }

Query for getting a single item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Defined in

[lib/types.ts:143](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L143)

___

### QueryGetMultiple

Ƭ **QueryGetMultiple**<`T`, `C`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `limit?`: `number` ; `method?`: ``"get"`` ; `multiple`: ``true`` ; `offset?`: `number`  } & { `customFields`: `C` ; `fields?`: readonly keyof `InjectCustomField`<`T`, `C`\>[] ; `filter?`: [`Filter`](README.md#filter)<`InjectCustomField`<`T`, `C`\>\> ; `groupBy?`: `Group`<`InjectCustomField`<`T`, `C`\>\>[] ; `orderBy?`: [`Order`](README.md#order)<`InjectCustomField`<`T`, `C`\>\>[]  } \| { `customFields?`: `never` ; `fields?`: readonly keyof `T`[] ; `filter?`: [`Filter`](README.md#filter)<`T`\> ; `groupBy?`: `Group`<`T`\>[] ; `orderBy?`: [`Order`](README.md#order)<`T`\>[]  }

Query for getting a list of items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Defined in

[lib/types.ts:183](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L183)

___

### QueryMethod

Ƭ **QueryMethod**: `Exclude`<[`Query`](README.md#query)<`never`, `never`\>[``"method"``], `undefined`\>

Available query methods.

#### Defined in

[lib/types.ts:123](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L123)

___

### QueryUpdate

Ƭ **QueryUpdate**<`T`, `C`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `customFields?`: `C` ; `filter?`: [`Filter`](README.md#filter)<`InjectCustomField`<`T`, `C`\>\> ; `groupBy?`: `never` ; `method`: ``"update"`` ; `offset?`: `never` ; `orderBy`: `never` ; `value`: `Partial`<`T`\>  }

Query for updating an item.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Defined in

[lib/types.ts:261](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L261)

___

### QueryUpdateMultiple

Ƭ **QueryUpdateMultiple**<`T`, `C`\>: [`QueryBase`](README.md#querybase)<`T`\> & { `customFields?`: `C` ; `filter?`: [`Filter`](README.md#filter)<`T`\> ; `limit?`: `number` ; `method`: ``"update"`` ; `multiple`: ``true`` ; `offset?`: `number` ; `orderBy?`: [`Order`](README.md#order)<`InjectCustomField`<`T`, `C`\>\>[] ; `value`: `Partial`<`T`\>[]  }

Query for updating multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Defined in

[lib/types.ts:283](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L283)

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

[lib/types.ts:13](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L13)

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
| `I` | extends [`AnyQuery`](README.md#anyquery) |
| `O` | `O` |
| `In` | extends [`AnyQuery`](README.md#anyquery) |
| `On` | `On` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay?` | `number` |
| `options.mergeQuery?` | (`query`: `I`, `currentQuery`: `I`) => `I` |
| `options.queryForGroup` | (`queryList`: `I`[], `group`: `string`) => [`AnyQuery`](README.md#anyquery) |
| `options.queryGroupId?` | (`query`: `I`) => `undefined` \| `string` |
| `options.queryId?` | (`query`: `I`) => `undefined` \| `string` |
| `options.resultForQuery` | (`resultList`: `O`[], `query`: `I`) => `O` |

#### Returns

[`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

#### Defined in

[lib/middlewares/aggregate.ts:16](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/aggregate.ts#L16)

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

[lib/middlewares/branch.ts:21](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/branch.ts#L21)

___

### cache

▸ **cache**<`I`, `O`, `In`, `On`\>(`«destructured»`): [`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`AnyQueryExternal`](README.md#anyqueryexternal) |
| `O` | `O` |
| `In` | extends [`AnyQueryExternal`](README.md#anyqueryexternal) |
| `On` | `On` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `CacheOptions`<`I`\> |

#### Returns

[`Handler`](README.md#handler)<`I`, `O`, `In`, `On`\>

#### Defined in

[lib/middlewares/cache.ts:39](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/cache.ts#L39)

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

[lib/middlewares/combine.ts:801](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/combine.ts#L801)

___

### defineCheckQuery

▸ **defineCheckQuery**<`Entities`\>(): <E, C, Q\>(`query`: `Q` & { `customFields?`: `C` ; `type`: `E`[]  }) => typeof `query`<T, E, C, Q\>(`query`: `Q` & { `customFields?`: `C` ; `type`: `T`  }) => typeof `query`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entities` | extends `Record`<`string`, `object`\> |

#### Returns

`fn`

▸ <`E`, `C`, `Q`\>(`query`): typeof `query`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`E`\> |
| `Q` | extends [`Query`](README.md#query)<`E`, `C`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `customFields?`: `C` ; `type`: `E`[]  } |

##### Returns

typeof `query`

▸ <`T`, `E`, `C`, `Q`\>(`query`): typeof `query`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `E` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`E`\> |
| `Q` | extends [`Query`](README.md#query)<`E`, `C`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Q` & { `customFields?`: `C` ; `type`: `T`  } |

##### Returns

typeof `query`

#### Defined in

[lib/tools/defineCheckQuery.ts:3](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/defineCheckQuery.ts#L3)

___

### defineCustomFetch

▸ **defineCustomFetch**<`M`\>(`handler`): <E, C, Q\>(`input`: `Q` & { `customFields?`: `C` ; `type`: `E`[]  }) => `Promise`<`Q`[``"method"``] extends ``"get"`` ? `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\> : `Q`[``"method"``] extends ``"aggregate"`` ? `number` : `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>\><T, E, C, Q\>(`input`: `Q` & { `customFields?`: `C` ; `type`: `T`  }) => `Promise`<`Q`[``"method"``] extends ``"get"`` ? `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\> : `Q`[``"method"``] extends ``"aggregate"`` ? `number` : `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Record`<`string`, `object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`Handler`](README.md#handler)<[`AnyQuery`](README.md#anyquery), `any`, `never`, `never`\> |

#### Returns

`fn`

▸ <`E`, `C`, `Q`\>(`input`): `Promise`<`Q`[``"method"``] extends ``"get"`` ? `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\> : `Q`[``"method"``] extends ``"aggregate"`` ? `number` : `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`E`\> |
| `Q` | extends [`Query`](README.md#query)<`E`, `C`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Q` & { `customFields?`: `C` ; `type`: `E`[]  } |

##### Returns

`Promise`<`Q`[``"method"``] extends ``"get"`` ? `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\> : `Q`[``"method"``] extends ``"aggregate"`` ? `number` : `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>\>

▸ <`T`, `E`, `C`, `Q`\>(`input`): `Promise`<`Q`[``"method"``] extends ``"get"`` ? `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\> : `Q`[``"method"``] extends ``"aggregate"`` ? `number` : `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `symbol` |
| `E` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`E`\> |
| `Q` | extends [`Query`](README.md#query)<`E`, `C`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Q` & { `customFields?`: `C` ; `type`: `T`  } |

##### Returns

`Promise`<`Q`[``"method"``] extends ``"get"`` ? `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\> : `Q`[``"method"``] extends ``"aggregate"`` ? `number` : `Q` extends { `multiple`: ``true``  } ? [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>[] : [`EntityItem`](README.md#entityitem)<`E`, `C`, `Q`\>\>

#### Defined in

[lib/tools/defineCustomFetch.ts:11](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/defineCustomFetch.ts#L11)

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

[lib/middlewares/fetchExternal.ts:12](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/fetchExternal.ts#L12)

___

### fetchLocal

▸ **fetchLocal**<`T`, `C`\>(): [`Handler`](README.md#handler)<[`Query`](README.md#query)<`T`, `C`\> & { `type`: `T`[]  }, `any`, `never`, `never`\>

Performs the fetch query on local data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Returns

[`Handler`](README.md#handler)<[`Query`](README.md#query)<`T`, `C`\> & { `type`: `T`[]  }, `any`, `never`, `never`\>

Promise that resolves to the response.

#### Defined in

[lib/middlewares/fetchLocal.ts:9](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/fetchLocal.ts#L9)

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

[lib/tools/filterFromContext.ts:5](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/filterFromContext.ts#L5)

___

### filterItem

▸ **filterItem**<`T`\>(`filter`, `value`): `boolean`

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

#### Returns

`boolean`

`true` if the `value` matches the `filter` and `false` otherwise.

#### Defined in

[lib/tools/filterItem.ts:12](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/filterItem.ts#L12)

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

[lib/middlewares/identity.ts:3](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/identity.ts#L3)

___

### impasse

▸ **impasse**(`input`): `Promise`<`never`\>

Handles an `input` query and returns an `output` promise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `never` |

#### Returns

`Promise`<`never`\>

#### Defined in

[lib/types.ts:31](https://github.com/nevoland/quetch/blob/3a78cd1/lib/types.ts#L31)

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

[lib/middlewares/log.ts:11](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/log.ts#L11)

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

[lib/tools/normalizeOrder.ts:3](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/normalizeOrder.ts#L3)

___

### queryItemList

▸ **queryItemList**<`T`, `C`\>(`query`): `number` \| `T` \| `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`CustomFieldMap`](README.md#customfieldmap)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Object` |

#### Returns

`number` \| `T` \| `T`[]

#### Defined in

[lib/tools/queryItemList.ts:41](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/queryItemList.ts#L41)

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

[lib/middlewares/retry.ts:15](https://github.com/nevoland/quetch/blob/3a78cd1/lib/middlewares/retry.ts#L15)

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

[lib/tools/sortItemList.ts:12](https://github.com/nevoland/quetch/blob/3a78cd1/lib/tools/sortItemList.ts#L12)
