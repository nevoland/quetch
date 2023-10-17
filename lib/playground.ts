// Type level bubble sort algorithm
// https://twitter.com/anuraghazra

type BubbleSort<
  A extends any[],
  Curr extends number = A["length"],
> = Curr extends 1
  ? A
  : A extends [infer F, infer S, ...infer Rest]
  ? BubbleSort<
      [
        ...(M.Comparator<M.Num<F>, M.Num<S>> extends true
          ? [S, ...BubbleSort<[F, ...Rest], M.Sub<Curr, 1>>]
          : [F, ...BubbleSort<[S, ...Rest], M.Sub<Curr, 1>>]),
      ],
      M.Sub<Curr, 1>
    >
  : never;

type Demo1 = BubbleSort<[9, 8, 2, 6, 5, 4, 1]>;

type Demo2 = BubbleSort<[234, 43, 55, 63, 5, 6, 235, 547]>;

type Tuple = M.NTuple<4, [null]>;

// Math Utils
namespace M {
  export type Num<T> = Extract<T, number>;
  type Length<T extends any[]> = T["length"];
  type Push<T extends any[], Val> = [...T, Val];
  export type NTuple<
    N extends number,
    T extends any[] = [],
  > = T["length"] extends N ? T : NTuple<N, Push<T, any>>;

  export type Add<A extends number, B extends number> = Length<
    [...NTuple<A>, ...NTuple<B>]
  >;
  export type Sub<A extends number, B extends number> = NTuple<A> extends [
    ...infer U,
    ...NTuple<B>,
  ]
    ? Length<U>
    : never;

  export type Comparator<N1 extends number, N2 extends number> = N1 extends N2
    ? false
    : [Sub<N2, N1>] extends [never]
    ? true
    : false;
}

// JS equivalent
function bubbleSort(input: number[], curr: number = 0): number[] {
  if (curr == input.length) {
    return input;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
      const newvar = input[i];
      input[i] = input[i + 1];
      input[i + 1] = newvar;
    }
  }
  return bubbleSort(input, curr + 1);
}

bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]);

type Input = {};
type Result = any;

type NextHandler<I, R> = (input: I) => Promise<R>;

type Handler<I, O, NI, No> = (
  input: I,
  next: NextHandler<NI, No>,
) => Promise<O>;

type TT = ["one", "two"];
type KK = number & keyof TT;

const key: KK = 1;

type Indices<T extends { length: number }> = Exclude<
  Partial<T>["length"],
  T["length"]
> &
  number;

type TupleIndices<T extends readonly any[]> = Extract<
  keyof T,
  `${number}`
> extends `${infer N extends number}`
  ? N
  : never;

function getHandler<
  HandlerList extends unknown[],
  K extends keyof HandlerList & number,
>(
  index: K,
): K extends 0 ? HandlerList[0] : K extends 1 ? HandlerList[1] : never {}

type Head<T extends readonly any[]> = T extends [...infer H, any] ? H : any[];

type Tail<T extends readonly any[]> = T extends readonly [any, ...infer R]
  ? R
  : never;

type First<T extends readonly any[]> = T extends readonly [any, ...infer R]
  ? T extends readonly [...infer F, ...R]
    ? F
    : never
  : never;
