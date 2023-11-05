import type { NextHandler } from "../types";

export async function identity<I, O, In, On>(
  input: I,
  next: NextHandler<In, On>,
): Promise<O> {
  return (await next(input as unknown as In)) as unknown as O;
}
