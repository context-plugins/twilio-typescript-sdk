import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Network issues of calls for client type. This is indicative of local network issues. */
export type Sdk = {
  /**
   * Percentage of ICE connection failure tag that ICE candidates have failed to find compatible
   * connection.
   */
  iceFailuresPercentage?: number;
  /** Percentage of calls with high latency. */
  highLatencyPercentage?: number;
  /** Percentage of calls with high packet loss. */
  highPacketLossPercentage?: number;
  /** Percentage of calls with high jitter. */
  highJitterPercentage?: number;
};

export const sdkSchema: Schema<Sdk> = s.object<Sdk>({
  iceFailuresPercentage: s.optional(s.float64()),
  highLatencyPercentage: s.optional(s.float64()),
  highPacketLossPercentage: s.optional(s.float64()),
  highJitterPercentage: s.optional(s.float64()),
  _keysMap: {
    iceFailuresPercentage: "ice_failures_percentage",
    highLatencyPercentage: "high_latency_percentage",
    highPacketLossPercentage: "high_packet_loss_percentage",
    highJitterPercentage: "high_jitter_percentage",
  },
});
