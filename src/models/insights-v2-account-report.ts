import { s, type Schema } from "../core/index.js";
import { accountReportSchema, type AccountReport } from "./account-report.js";
import { reportMetadataSchema, type ReportMetadata } from "./report-metadata.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type InsightsV2AccountReport = {
  accountSid?: string;
  reportId?: string;
  status?: ReportStatus;
  requestMeta?: ReportMetadata;
  report?: AccountReport;
  url?: string | null;
};

export const insightsV2AccountReportSchema: Schema<InsightsV2AccountReport> =
  s.object<InsightsV2AccountReport>({
    accountSid: s.optional(s.string()),
    reportId: s.optional(s.string()),
    status: s.optional(s.lazy(() => reportStatusSchema)),
    requestMeta: s.optional(s.lazy(() => reportMetadataSchema)),
    report: s.optional(s.lazy(() => accountReportSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      reportId: "report_id",
      requestMeta: "request_meta",
    },
  });
