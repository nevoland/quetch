// @ts-nocheck

import type { FieldFiltered, QueryRead } from "../../lib/types";

type BaseEmployee = {
  name: string;
  id: string;
};

type Employee = BaseEmployee & {
  compensation: number;
  directReports: Array<BaseEmployee>;
  manager: BaseEmployee;
  position: Position;
};

type Position = {
  type: string;
  level: number;
};

type Test = FieldFiltered<Employee, string>;

const FIELD_MAP = {
  name: {
    Filter: StringFilter,
  },
  directReports: {
    children: {
      [ANY]: {
        children: FIELD_MAP,
      },
    },
  },
  manager: {
    children: FIELD_MAP,
  },
};

const FIELD_LIST = [
  {
    field: "name",
    Filter: FilterItemString,
  },
  {
    field: [],
  },
];

const query: QueryRead<Employee> = {
  method: "read",
  filter: {
    operator: "equal",
    value: "principal",
    field: ["directReports", ANY, "name"],
    field: "directReports.*.name",
  },
};

const ANY = Symbol("ANY");
