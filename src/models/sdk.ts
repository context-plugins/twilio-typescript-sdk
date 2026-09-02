import { s, type Schema } from "../core/index.js";

export type Sdk = {
  iceFailuresPercentage?: number;
  highLatencyPercentage?: number;
  highPacketLossPercentage?: number;
  highJitterPercentage?: number;
};

export const sdkSchema: Schema<Sdk> = s.object<Sdk>({
  iceFailuresPercentage: s.optional(s.number()),
  highLatencyPercentage: s.optional(s.number()),
  highPacketLossPercentage: s.optional(s.number()),
  highJitterPercentage: s.optional(s.number()),
  _keysMap: {
    iceFailuresPercentage: "ice_failures_percentage",
    highLatencyPercentage: "high_latency_percentage",
    highPacketLossPercentage: "high_packet_loss_percentage",
    highJitterPercentage: "high_jitter_percentage",
  },
});
