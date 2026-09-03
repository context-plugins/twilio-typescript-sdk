import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
