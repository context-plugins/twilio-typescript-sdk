import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeRange = {
  startDatetime?: Date;
  endDatetime?: Date;
};

export const timeRangeSchema: Schema<TimeRange> = s.object<TimeRange>({
  startDatetime: s.optional(s.dateTime()),
  endDatetime: s.optional(s.dateTime()),
  _keysMap: {
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  },
});
