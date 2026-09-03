import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportFilterSchema, type ReportFilter } from "./report-filter.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type InsightsV2CreateAccountReportRequest = {
  timeRange?: TimeRange;
  filters?: ReportFilter[];
};

export const insightsV2CreateAccountReportRequestSchema: Schema<InsightsV2CreateAccountReportRequest> =
  s.object<InsightsV2CreateAccountReportRequest>({
    timeRange: s.optional(s.lazy(() => timeRangeSchema)),
    filters: s.optional(s.array(s.lazy(() => reportFilterSchema))),
    _keysMap: {
      timeRange: "time_range",
    },
  });
