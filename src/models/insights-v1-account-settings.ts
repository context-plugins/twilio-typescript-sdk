import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsV1AccountSettings = {
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** A boolean flag indicating whether Advanced Features for Voice Insights are enabled. */
  advancedFeatures?: boolean | null;
  /** A boolean flag indicating whether Voice Trace is enabled. */
  voiceTrace?: boolean | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const insightsV1AccountSettingsSchema: Schema<InsightsV1AccountSettings> =
  s.object<InsightsV1AccountSettings>({
    accountSid: s.optionalNullable(s.string()),
    advancedFeatures: s.optionalNullable(s.boolean()),
    voiceTrace: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      advancedFeatures: "advanced_features",
      voiceTrace: "voice_trace",
    },
  });
