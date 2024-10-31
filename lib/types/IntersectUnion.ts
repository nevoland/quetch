export type IntersectUnion<T> = (
  T extends any ? (_: T) => void : never
) extends (_: infer U) => void
  ? U
  : never;
