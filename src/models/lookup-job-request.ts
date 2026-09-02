import { s, type Schema } from "../core/index.js";
import { jobThresholdsSchema, type JobThresholds } from "./job-thresholds.js";

export type LookupJobRequest = {
  friendlyName?: string | null;
  description?: string | null;
  thresholds?: JobThresholds;
};

export const lookupJobRequestSchema: Schema<LookupJobRequest> = s.object<LookupJobRequest>({
  friendlyName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  thresholds: s.optional(s.lazy(() => jobThresholdsSchema)),
  _keysMap: {
    friendlyName: "friendly_name",
  },
});
