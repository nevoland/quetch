import { type Filter, defineCustomFetch } from "../../lib/main.js";

type id = string;

type Message = {
  id: id;
  creationDate: string;
  deviceId: id;
  data: {
    // key could be smartSensing.{$READING}
    [key: string]: {
      value: string | boolean | number;
    };
  };
};

const deviceList = await customFetch({
  type: "device",
  filter: {
    field: "id",
    operator: "in",
    value: {
      type: "alert",
      field: ["deviceId"],
      filter: {
        field: "type",
        operator: "equal",
        value: "IMEI_MISMATCH",
      },
      flatten: true,
      map: { field: "deviceId" },
      valueField: "deviceId",
    },
  },
});

const alertList = await customFetch({
  type: "alert",
  multiple: true,
  fields: ["deviceId"],
  filter: {
    field: "type",
    operator: "equal",
    value: "IMEI_MISMATCH",
  },
});

const deviceList = alertList.map((alert) => alert.deviceId);

const deviceWithMisatch = await customFetch({
  type: "device",
  filter: {
    field: "id",
    operator: "included",
    value: deviceList,
  },
});

type EntityMap = {
  device: {
    id: id;
    name?: string;
    lastMessage?: Message;
  };
  device1: {
    id: id;
    name?: string;
    lastMessage?: Message;
    alerts: alert[];
  };
  alert: {
    id: id;
    type: string;
    deviceId: id;
    description: string;
  };
  message: Message;
  user: {
    fullName?: string;
    userName?: string;
    creationDate?: string;
    age?: number;
    parents?: Array<{ userName: string }>;
    friends?: Array<string>;
    book?: Array<id>;
  };
  book: { id: string; title: string; description: string };
  house: {
    id: id;
    name: string;
  };
  gateway: {
    id: id;
    houseId: id;
    name: string;
    // sensorList: id[];
  };
  sensor: {
    id: id;
    houseId: id;
    // gatewayIdList: id[];
  };
  record: {
    sensorId: id;
    creationDate: string;
    data: {
      [key: string]: any;
    };
  };
};

const customFetch = defineCustomFetch<EntityMap>(null as any);

const temperatureOfHouse = customFetch({
  type: "record",
  method: "read",
  multiple: true,
  order: [{ field: "creationDate", descending: true }],
  distinct: ["sensorId"],
  filter: {
    operator: "all",
    value: [
      {
        operator: "exist",
        field: ["data", "temperature"],
      },
      {
        field: "sensorId",
        operator: "include",
        query: true,
        value: {
          type: "sensor",
          fields: ["sensorId"],
          // distinctFields: ["sensorId"],
          filter: {
            field: "houseId",
            operator: "equal",
            value: HOUSE_ID,
          },
        },
      },
    ],
  },
});

const temperatureOfHouse = customFetch({
  type: "record",
  method: "read",
  multiple: true,
  order: ["creationDate"],
  filter: {
    operator: "all",
    value: [
      { field: "creationDate", operator: "greaterThan", value: "123456890" },
      {
        field: "sensorId",
        operator: "in",
        value: {
          operator: "query",
          value: {
            type: "sensor",
            distinct: "sensorId",
            filter: {
              field: "houseId",
              operator: "equal",
              value: HOUSE_ID,
            },
          },
        },
      },
    ],
  },
});

const user = await customFetch({
  type: "user",
  multiple: true,
  fields: ["userName", "age"],
  order: [{ field: "creationDate", descending: true }],
  offset: 10,
  limit: 20,
  context: {
    companyId: "COMPANY_ID",
  },
  parameters: {},
  filter: {
    operator: "all",
    value: [
      {
        field: "age",
        operator: "greaterThan",
        age: 18,
      },
      {
        field: "creationDate",
        operator: "greaterThanOrEqual",
        value: "2024",
      },
      {
        field: ["parents"],
        operator: "has",
        filter: {
          field: "age",
          operator: "greaterThan",
          value: "18",
        },
      },
      {
        field: ["parents", ANY_INDEX, "/"],
        operator: "greaterThan",
        value: "18",
      },
      {
        field: ["book", "FROM", "id", "WHERE", "title"], // ?
        operator: "include",
        value: "dog",
      } as any,
    ],
  },
});

const queryString =
  "(a > 5 || a < 18) && (b = 'T' || c.d = 'S') && (parents HAS (age > 18))";

const queryObject = {
  operator: "all", // AND
  value: [
    {
      operator: "any", // OR
      value: [
        { field: "a", operator: "greaterThan", value: 5 },
        { field: "a", operator: "lessThan", value: 18 },
      ],
    },
    {
      operator: "any",
      value: [
        { field: "b", operator: "equal", value: "T" },
        { field: "c.d", operator: "equal", value: "S" },
        { field: ["c", "d"], operator: "equal", value: "S" },
      ],
    },
  ],
};
