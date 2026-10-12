import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JobThresholds = {
  error?: number | null;
};

export const jobThresholdsSchema: Schema<JobThresholds> = s.object<JobThresholds>({
  error: s.optionalNullable(s.float64()),
});
