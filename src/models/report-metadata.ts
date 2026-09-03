import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportFilterSchema, type ReportFilter } from "./report-filter.js";

export type ReportMetadata = {
  startDatetime?: Date;
  endDatetime?: Date;
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
