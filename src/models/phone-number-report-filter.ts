import { s, type Schema } from "../core/index.js";

export type PhoneNumberReportFilter = {
  key?: string;
  values?: string[];
};

export const phoneNumberReportFilterSchema: Schema<PhoneNumberReportFilter> =
  s.object<PhoneNumberReportFilter>({
    key: s.optional(s.string()),
    values: s.optional(s.array(s.string())),
  });
