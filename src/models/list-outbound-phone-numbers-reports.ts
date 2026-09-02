import { s, type Schema } from "../core/index.js";
import {
  insightsV2OutboundPhoneNumberReportSchema,
  type InsightsV2OutboundPhoneNumberReport,
} from "./insights-v2-outbound-phone-number-report.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListOutboundPhoneNumbersReports = {
  reports?: InsightsV2OutboundPhoneNumberReport[];
  meta?: Meta;
};

export const listOutboundPhoneNumbersReportsSchema: Schema<ListOutboundPhoneNumbersReports> =
  s.object<ListOutboundPhoneNumbersReports>({
    reports: s.optional(s.array(s.lazy(() => insightsV2OutboundPhoneNumberReportSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
