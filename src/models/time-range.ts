import { s, type Schema } from "../core/index.js";

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
