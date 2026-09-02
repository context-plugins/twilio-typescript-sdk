import { s, type Schema } from "../core/index.js";
import {
  insightsV2InboundPhoneNumberReportSchema,
  type InsightsV2InboundPhoneNumberReport,
} from "./insights-v2-inbound-phone-number-report.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInboundPhoneNumbersReports = {
  reports?: InsightsV2InboundPhoneNumberReport[];
  meta?: Meta;
};

export const listInboundPhoneNumbersReportsSchema: Schema<ListInboundPhoneNumbersReports> =
  s.object<ListInboundPhoneNumbersReports>({
    reports: s.optional(s.array(s.lazy(() => insightsV2InboundPhoneNumberReportSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
