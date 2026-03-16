type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type NextDigit = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export type Decrement<D> = D extends Digit ? NextDigit[D] : -1;
