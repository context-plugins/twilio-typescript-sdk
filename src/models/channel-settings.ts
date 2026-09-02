import { s, type Schema } from "../core/index.js";
import { captureRuleSchema, type CaptureRule } from "./capture-rule.js";
import { statusTimeoutsSchema, type StatusTimeouts } from "./status-timeouts.js";

export type ChannelSettings = {
  statusTimeouts?: StatusTimeouts;
  captureRules?: CaptureRule[];
};

export const channelSettingsSchema: Schema<ChannelSettings> = s.object<ChannelSettings>({
  statusTimeouts: s.optional(s.lazy(() => statusTimeoutsSchema)),
  captureRules: s.optional(s.array(s.lazy(() => captureRuleSchema))),
});
