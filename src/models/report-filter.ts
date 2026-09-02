import { s, type Schema } from "../core/index.js";

export type ReportFilter = {
  key?: string;
  values?: string[];
};

export const reportFilterSchema: Schema<ReportFilter> = s.object<ReportFilter>({
  key: s.optional(s.string()),
  values: s.optional(s.array(s.string())),
});
