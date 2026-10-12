import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Carrier = {
  /** The name of the carrier. */
  carrier?: string;
  /** Total number of outbound calls for the carrier in the country. */
  totalCalls?: number;
  /** Total number of blocked outbound calls for the carrier in the country. */
  blockedCalls?: number;
  /** Percentage of blocked outbound calls for the carrier in the country. */
  blockedCallsPercentage?: number;
};

export const carrierSchema: Schema<Carrier> = s.object<Carrier>({
  carrier: s.optional(s.string()),
  totalCalls: s.optional(s.int()),
  blockedCalls: s.optional(s.int()),
  blockedCallsPercentage: s.optional(s.float64()),
  _keysMap: {
    totalCalls: "total_calls",
    blockedCalls: "blocked_calls",
    blockedCallsPercentage: "blocked_calls_percentage",
  },
});
