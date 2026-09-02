import { s, type EnumSchema } from "../core/index.js";

export const ReportStatus = {
  Created: "created",
  Running: "running",
  Completed: "completed",
} as const;
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus] | (string & {});

export const reportStatusSchema: EnumSchema<ReportStatus> = s.enumOf<ReportStatus>(ReportStatus);
