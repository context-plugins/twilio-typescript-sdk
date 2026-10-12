import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines a capture rule with from and to addresses. Supports wildcard `*` for omnidirectional
 * matching.
 */
export type ConversationsV2CaptureRule = {
  /** The from address. Use `*` for wildcard to match any from address. */
  from: string;
  /** The to address. Use `*` for wildcard to match any to address. */
  to: string;
  /**
   * Additional matching criteria for the capture rule. For voice calls, can include `callType`
   * (`PSTN`, `SIP`, and similar).
   */
  metadata?: Record<string, string>;
};

export const conversationsV2CaptureRuleSchema: Schema<ConversationsV2CaptureRule> =
  s.object<ConversationsV2CaptureRule>({
    from: s.string(),
    to: s.string(),
    metadata: s.optional(s.record(s.string(), s.string())),
  });
