import { s, type Schema } from "../core/index.js";

export type CaptureRule = {
  from: string;
  to: string;
  metadata?: Record<string, string>;
};

export const captureRuleSchema: Schema<CaptureRule> = s.object<CaptureRule>({
  from: s.string(),
  to: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
});
