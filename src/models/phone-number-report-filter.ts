import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumberReportFilter = {
  key?: string;
  values?: string[];
};

export const phoneNumberReportFilterSchema: Schema<PhoneNumberReportFilter> =
  s.object<PhoneNumberReportFilter>({
    key: s.optional(s.string()),
    values: s.optional(s.array(s.string())),
  });
