import { s, type Schema } from "../core/index.js";

export type InsightsV1AccountSettings = {
  accountSid?: string | null;
  advancedFeatures?: boolean | null;
  voiceTrace?: boolean | null;
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
