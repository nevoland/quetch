export type KeyFromUnion<U> = U extends U ? keyof U : never;
