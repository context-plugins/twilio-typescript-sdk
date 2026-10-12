import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JobResult = {
  fileUrl?: string | null;
  totalCount?: number;
  processedCount?: number;
  successCount?: number;
  errorCount?: number;
  details?: string | null;
};

export const jobResultSchema: Schema<JobResult> = s.object<JobResult>({
  fileUrl: s.optionalNullable(s.string()),
  totalCount: s.optional(s.int()),
  processedCount: s.optional(s.int()),
  successCount: s.optional(s.int()),
  errorCount: s.optional(s.int()),
  details: s.optionalNullable(s.string()),
  _keysMap: {
    fileUrl: "file_url",
    totalCount: "total_count",
    processedCount: "processed_count",
    successCount: "success_count",
    errorCount: "error_count",
  },
});
