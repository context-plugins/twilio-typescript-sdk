import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV2CaptureRule = {
  from: string;
  to: string;
  metadata?: Record<string, string>;
};

export const conversationsV2CaptureRuleSchema: Schema<ConversationsV2CaptureRule> =
  s.object<ConversationsV2CaptureRule>({
    from: s.string(),
    to: s.string(),
    metadata: s.optional(s.record(s.string(), s.string())),
  });
