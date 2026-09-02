import { s, type Schema } from "../core/index.js";
import { jobResultSchema, type JobResult } from "./job-result.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";
import { jobThresholdsSchema, type JobThresholds } from "./job-thresholds.js";

export type LookupJobResponse = {
  jobSid?: string;
  friendlyName?: string | null;
  description?: string | null;
  status?: JobStatus;
  thresholds?: JobThresholds;
  createdAt?: Date;
  completedAt?: Date | null;
  result?: JobResult;
  twilioErrorCode?: number | null;
};

export const lookupJobResponseSchema: Schema<LookupJobResponse> = s.object<LookupJobResponse>({
  jobSid: s.optional(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => jobStatusSchema)),
  thresholds: s.optional(s.lazy(() => jobThresholdsSchema)),
  createdAt: s.optional(s.dateTime()),
  completedAt: s.optionalNullable(s.dateTime()),
  result: s.optional(s.lazy(() => jobResultSchema)),
  twilioErrorCode: s.optionalNullable(s.number()),
  _keysMap: {
    jobSid: "job_sid",
    friendlyName: "friendly_name",
    createdAt: "created_at",
    completedAt: "completed_at",
    twilioErrorCode: "twilio_error_code",
  },
});
