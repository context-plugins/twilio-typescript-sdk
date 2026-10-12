import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CaptureRule = {
  /** The from address. Use '*' for wildcard. */
  from: string;
  /** The to address. Use '*' for wildcard. */
  to: string;
  metadata?: Record<string, string>;
};

export const captureRuleSchema: Schema<CaptureRule> = s.object<CaptureRule>({
  from: s.string(),
  to: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
});
