import type { IntersectUnion } from "./IntersectUnion";

export type Normalized<T extends object> = Required<IntersectUnion<T>>;
