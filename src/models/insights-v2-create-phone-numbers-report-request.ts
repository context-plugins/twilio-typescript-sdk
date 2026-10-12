import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { phoneNumberReportFilterSchema, type PhoneNumberReportFilter } from "./phone-number-report-filter.js";
import { timeRange1Schema, type TimeRange1 } from "./time-range1.js";

export type InsightsV2CreatePhoneNumbersReportRequest = {
  timeRange?: TimeRange1;
  filters?: PhoneNumberReportFilter[];
  /** The number of max available top Phone Numbers to generate. @default 1000 */
  size?: number;
};

export const insightsV2CreatePhoneNumbersReportRequestSchema: Schema<InsightsV2CreatePhoneNumbersReportRequest> =
  s.object<InsightsV2CreatePhoneNumbersReportRequest>({
    timeRange: s.optional(s.lazy(() => timeRange1Schema)),
    filters: s.optional(s.array(s.lazy(() => phoneNumberReportFilterSchema))),
    size: s.defaulted(s.int(), 1000),
    _keysMap: {
      timeRange: "time_range",
    },
  });
