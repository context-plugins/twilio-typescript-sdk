import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CaptureRule1 = {
  from: string;
  to: string;
  metadata?: Record<string, string>;
};

export const captureRule1Schema: Schema<CaptureRule1> = s.object<CaptureRule1>({
  from: s.string(),
  to: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
});
