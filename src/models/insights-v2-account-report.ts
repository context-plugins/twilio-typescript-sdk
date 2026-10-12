import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountReportSchema, type AccountReport } from "./account-report.js";
import { reportMetadataSchema, type ReportMetadata } from "./report-metadata.js";
import { reportStatusSchema, type ReportStatus } from "./report-status.js";

export type InsightsV2AccountReport = {
  /** The unique SID identifier of the Account. */
  accountSid?: string;
  /** The account level report identifier as Voice Insights Report TTID. */
  reportId?: string;
  /** The status of the report. */
  status?: ReportStatus;
  requestMeta?: ReportMetadata;
  report?: AccountReport;
  /** The URL of this resource. */
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
