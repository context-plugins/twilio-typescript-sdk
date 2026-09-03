import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportFilter = {
  key?: string;
  values?: string[];
};

export const reportFilterSchema: Schema<ReportFilter> = s.object<ReportFilter>({
  key: s.optional(s.string()),
  values: s.optional(s.array(s.string())),
});
