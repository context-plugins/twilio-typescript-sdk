import { s, type Schema } from "../core/index.js";

export type TimeRange1 = {
  startDatetime?: Date;
  endDatetime?: Date;
};

export const timeRange1Schema: Schema<TimeRange1> = s.object<TimeRange1>({
  startDatetime: s.optional(s.dateTime()),
  endDatetime: s.optional(s.dateTime()),
  _keysMap: {
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  },
});
