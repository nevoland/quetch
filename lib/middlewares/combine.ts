type Input = {};
type Result = any;

type Next<I extends Input = Input, R extends Result = Result> = (
  input: Input,
) => Promise<R>;

type Handler<I extends Input = Input, R extends Result = Result> = (
  input: I,
  next: Next,
) => Promise<R>;

type ReturnHandler<I extends Input = Input, R extends Result = Result> = (
  input: I,
) => Promise<R>;

// function isReturnHandler(
//   handler: Handler | ReturnHandler,
// ): handler is ReturnHandler {
//   return handler.length === 1;
// }

function combine<I extends Input, R extends Result>(
  ...handlerList: [Handler<I, R>, ...Handler[], ReturnHandler]
  // ...handlerList: [...Handler[], ReturnHandler]
): Handler<I, R> {
  return function combinedHandlers(input, next) {
    function dispatch(input: Input, index: number): Promise<R> {
      const handler = handlerList[index];
      if (handler === undefined) {
        return (next as ReturnHandler)(input);
      }
      const result = handler(input, function (input) {
        return dispatch(input, index + 1);
      });
      if (result == null) {
        throw new Error("Handler did not return response");
      }
      return result;
    }
    return dispatch(input, 0);
  };
}

const customFetch = combine(
  async (query, next) => {
    const result = await next({ url: "http://www.apple.com/" });
    return result;
  },
  async (query) => {
    const result = await fetch(query);
    return result;
  },
);
