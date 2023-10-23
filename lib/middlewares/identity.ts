import type { NextHandler } from "../types";

export async function identity<I, O, In, On>(
  input: I,
  next: NextHandler<In, On>,
): Promise<O> {
  return (await next(input as unknown as In)) as unknown as O;
}

export const identity3 = async <I, O, In, On>(
  input: I,
  next: NextHandler<In, On>,
): Promise<O> => (await next(input as unknown as In)) as unknown as O;

export async function identity2<I, O, In extends I, On extends O>(
  input: In,
  next: NextHandler<In, On>,
): Promise<On> {
  return await next(input);
}
