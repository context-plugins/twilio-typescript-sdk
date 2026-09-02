import { s, type Schema } from "../core/index.js";

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
