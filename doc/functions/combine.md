[**quetch**](../README.md) • **Docs**

***

[quetch](../README.md) / combine

# Function: combine()

> **combine**\<`I0`, `O0`, `I1`, `O1`, `I2`, `O2`, `I3`, `O3`, `I4`, `O4`, `I5`, `O5`, `I6`, `O6`, `I7`, `O7`, `I8`, `O8`, `I9`, `O9`, `I10`, `O10`, `I11`, `O11`, `I12`, `O12`, `I13`, `O13`, `I14`, `O14`, `I15`, `O15`, `I16`, `O16`, `I17`, `O17`, `I18`, `O18`, `I19`, `O19`, `I20`, `O20`, `I21`, `O21`\>(...`handlerList`): [`Handler`](../type-aliases/Handler.md)\<`I0`, `O0`, `I21`, `O21`\>

Combines the provided handler into a single handler.

## Type Parameters

• **I0**

• **O0**

• **I1**

• **O1**

• **I2**

• **O2**

• **I3**

• **O3**

• **I4**

• **O4**

• **I5**

• **O5**

• **I6**

• **O6**

• **I7**

• **O7**

• **I8**

• **O8**

• **I9**

• **O9**

• **I10**

• **O10**

• **I11**

• **O11**

• **I12**

• **O12**

• **I13**

• **O13**

• **I14**

• **O14**

• **I15**

• **O15**

• **I16**

• **O16**

• **I17**

• **O17**

• **I18**

• **O18**

• **I19**

• **O19**

• **I20**

• **O20**

• **I21**

• **O21**

## Parameters

• ...**handlerList**: readonly [[`Handler`](../type-aliases/Handler.md)\<`I0`, `O0`, `I1`, `O1`\>, [`Handler`](../type-aliases/Handler.md)\<`I1`, `O1`, `I2`, `O2`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I2`, `O2`, `I3`, `O3`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I3`, `O3`, `I4`, `O4`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I4`, `O4`, `I5`, `O5`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I5`, `O5`, `I6`, `O6`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I6`, `O6`, `I7`, `O7`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I7`, `O7`, `I8`, `O8`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I8`, `O8`, `I9`, `O9`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I9`, `O9`, `I10`, `O10`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I10`, `O10`, `I11`, `O11`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I11`, `O11`, `I12`, `O12`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I12`, `O12`, `I13`, `O13`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I13`, `O13`, `I14`, `O14`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I14`, `O14`, `I15`, `O15`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I15`, `O15`, `I16`, `O16`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I16`, `O16`, `I17`, `O17`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I17`, `O17`, `I18`, `O18`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I18`, `O18`, `I19`, `O19`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I19`, `O19`, `I20`, `O20`\>, `undefined` \| [`Handler`](../type-aliases/Handler.md)\<`I20`, `O20`, `I21`, `O21`\>]

List of handlers to combine.

## Returns

[`Handler`](../type-aliases/Handler.md)\<`I0`, `O0`, `I21`, `O21`\>

Handler that combines all provided handlers.

## Defined in

[lib/middlewares/combine.ts:801](https://github.com/nevoland/quetch/blob/4c3c4d08a348f3317d0dfdffa7516132c18306c7/lib/middlewares/combine.ts#L801)
