import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Network related metrics for Twilio Gateway calls only. */
export type TwilioGateway = {
  /** Percentage of calls with high latency. */
  highLatencyPercentage?: number;
  /** Percentage of calls with high packet loss. */
  highPacketLossPercentage?: number;
  /** Percentage of calls with high jitter. */
  highJitterPercentage?: number;
};

export const twilioGatewaySchema: Schema<TwilioGateway> = s.object<TwilioGateway>({
  highLatencyPercentage: s.optional(s.float64()),
  highPacketLossPercentage: s.optional(s.float64()),
  highJitterPercentage: s.optional(s.float64()),
  _keysMap: {
    highLatencyPercentage: "high_latency_percentage",
    highPacketLossPercentage: "high_packet_loss_percentage",
    highJitterPercentage: "high_jitter_percentage",
  },
});
