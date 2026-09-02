import { s, type Schema } from "../core/index.js";

export type JobThresholds = {
  error?: number | null;
};

export const jobThresholdsSchema: Schema<JobThresholds> = s.object<JobThresholds>({
  error: s.optionalNullable(s.number()),
});
