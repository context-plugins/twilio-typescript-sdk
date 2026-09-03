import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportMetadataSchema, type ReportMetadata } from "./report-metadata.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type InsightsV2CreateReportResponse = {
  accountSid?: string;
  reportId?: string;
  status?: ReportStatus;
  requestMeta?: ReportMetadata;
  url?: string | null;
};

export const insightsV2CreateReportResponseSchema: Schema<InsightsV2CreateReportResponse> =
  s.object<InsightsV2CreateReportResponse>({
    accountSid: s.optional(s.string()),
    reportId: s.optional(s.string()),
    status: s.optional(s.lazy(() => reportStatusSchema)),
    requestMeta: s.optional(s.lazy(() => reportMetadataSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      reportId: "report_id",
      requestMeta: "request_meta",
    },
  });
