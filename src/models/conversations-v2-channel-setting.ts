import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2CaptureRuleSchema,
  type ConversationsV2CaptureRule,
} from "./conversations-v2-capture-rule.js";
import {
  conversationsV2StatusTimeoutsSchema,
  type ConversationsV2StatusTimeouts,
} from "./conversations-v2-status-timeouts.js";

/** Configuration settings for a specific channel type. */
export type ConversationsV2ChannelSetting = {
  /** Timeout settings for channel status transitions. */
  statusTimeouts?: ConversationsV2StatusTimeouts;
  /**
   * Array of capture rules with from/to addresses and optional metadata. Use `*` for wildcard
   * matching in either direction.
   */
  captureRules?: ConversationsV2CaptureRule[];
};

export const conversationsV2ChannelSettingSchema: Schema<ConversationsV2ChannelSetting> =
  s.object<ConversationsV2ChannelSetting>({
    statusTimeouts: s.optional(s.lazy(() => conversationsV2StatusTimeoutsSchema)),
    captureRules: s.optional(s.array(s.lazy(() => conversationsV2CaptureRuleSchema))),
  });
