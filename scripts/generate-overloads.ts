/*
function combine<Ai, Ao, Bi, Bo, Ci, Co>(
  ...handlerList: readonly [Handler4<Ai, Ao, Bi, Bo>, Handler4<Bi, Bo, Ci, Co>]
): Handler4<Ai, Ao, Ci, Co>;
function combine<Ai, Ao, Bi, Bo, Ci, Co, Di, Do>(
  ...handlerList: readonly [
    Handler4<Ai, Ao, Bi, Bo>,
    Handler4<Bi, Bo, Ci, Co>,
    Handler4<Ci, Co, Di, Do>,
  ]
): Handler4<Ai, Ao, Di, Do>;
*/

function generateSignature(argumentsCount = 2) {
  return `function combine<${generateGenericsList(0, argumentsCount + 1)}>(
  ...handlerList: readonly [${generateArgumentTypes(argumentsCount)}]
): Handler<${generateGenericsList(0, 2, argumentsCount)}>;`;
}

function generateArgumentTypes(argumentsCount = 2) {
  return Array(argumentsCount)
    .fill("")
    .map((_, index) => `Handler<${generateGenericsList(index, 2)}>`)
    .join(", ");
}

function generateGenericsList(fromIndex = 0, length = 2, step = 1) {
  return Array(length)
    .fill("")
    .flatMap((_, index) => [
      `I${fromIndex + index * step}`,
      `O${fromIndex + index * step}`,
    ])
    .join(", ");
}

Array(20)
  .fill("")
  .forEach((_, index) => {
    console.log(generateSignature(2 + index));
  });
