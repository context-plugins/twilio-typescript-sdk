import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportFilterSchema, type ReportFilter } from "./report-filter.js";

export type ReportMetadata = {
  /** Start date time of the report */
  startDatetime?: Date;
  /** End date time of the report */
  endDatetime?: Date;
  /** Filter values applied to the report */
  filters?: ReportFilter[];
};

export const reportMetadataSchema: Schema<ReportMetadata> = s.object<ReportMetadata>({
  startDatetime: s.optional(s.dateTime()),
  endDatetime: s.optional(s.dateTime()),
  filters: s.optional(s.array(s.lazy(() => reportFilterSchema))),
  _keysMap: {
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  },
});
