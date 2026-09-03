import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwilioGateway = {
  highLatencyPercentage?: number;
  highPacketLossPercentage?: number;
  highJitterPercentage?: number;
};

export const twilioGatewaySchema: Schema<TwilioGateway> = s.object<TwilioGateway>({
  highLatencyPercentage: s.optional(s.number()),
  highPacketLossPercentage: s.optional(s.number()),
  highJitterPercentage: s.optional(s.number()),
  _keysMap: {
    highLatencyPercentage: "high_latency_percentage",
    highPacketLossPercentage: "high_packet_loss_percentage",
    highJitterPercentage: "high_jitter_percentage",
  },
});
