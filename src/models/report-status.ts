import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the report. */
export const ReportStatus = {
  Created: "created",
  Running: "running",
  Completed: "completed",
} as const;
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus] | (string & {});

export const reportStatusSchema: EnumSchema<ReportStatus> = s.enumOf<ReportStatus>(ReportStatus);
