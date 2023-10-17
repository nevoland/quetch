/* eslint-disable id-length */
interface IPerson {
  name: string;
}

const person: IPerson = {
  name: "John",
};

const getName = (p: IPerson) => p.name;
const getLength = (str: number) => str;
const isEven = (num: number) => num % 2 === 0;

type ArityOneFn = (arg: any) => any;

type PickLastInTuple<T extends any[]> = T extends [
  ...rest: infer U,
  argn: infer L,
]
  ? L
  : never;

type FirstFnParameterType<T extends any[]> = Parameters<
  PickLastInTuple<T>
>[any];

type LastFnReturnType<T extends any[]> = ReturnType<T[0]>;

const compose =
  <T extends ArityOneFn[]>(...fns: T) =>
  (p: FirstFnParameterType<T>): LastFnReturnType<T> =>
    fns.reduceRight((acc: any, cur: any) => cur(acc), p);

const myComposedFn = compose(isEven, getLength, getName);
// In vscode if you hover on that function you would see:
// const myComposedFn: (p: IPerson) => boolean
