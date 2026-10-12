import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportFilter = {
  /**
   * The name of the filter 'call_state', 'call_direction', 'call_type', 'twilio_regions',
   * 'caller_country_code', 'callee_country_code', 'silent'
   */
  key?: string;
  /** List of supported filter values for the field name */
  values?: string[];
};

export const reportFilterSchema: Schema<ReportFilter> = s.object<ReportFilter>({
  key: s.optional(s.string()),
  values: s.optional(s.array(s.string())),
});
