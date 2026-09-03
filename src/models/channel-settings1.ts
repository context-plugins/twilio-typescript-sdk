import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { captureRule1Schema, type CaptureRule1 } from "./capture-rule1.js";
import { statusTimeouts1Schema, type StatusTimeouts1 } from "./status-timeouts1.js";

export type ChannelSettings1 = {
  statusTimeouts?: StatusTimeouts1;
  captureRules?: CaptureRule1[];
};

export const channelSettings1Schema: Schema<ChannelSettings1> = s.object<ChannelSettings1>({
  statusTimeouts: s.optional(s.lazy(() => statusTimeouts1Schema)),
  captureRules: s.optional(s.array(s.lazy(() => captureRule1Schema))),
});
