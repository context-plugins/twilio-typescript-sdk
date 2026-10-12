import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional start and end date time for the report window. Defaults to the most recent 7 days when
 * omitted.
 */
export type TimeRange = {
  /** Start date time of the report */
  startDatetime?: Date;
  /** End date time of the report */
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
