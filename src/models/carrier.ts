import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Carrier = {
  carrier?: string;
  totalCalls?: number;
  blockedCalls?: number;
  blockedCallsPercentage?: number;
};

export const carrierSchema: Schema<Carrier> = s.object<Carrier>({
  carrier: s.optional(s.string()),
  totalCalls: s.optional(s.number()),
  blockedCalls: s.optional(s.number()),
  blockedCallsPercentage: s.optional(s.number()),
  _keysMap: {
    totalCalls: "total_calls",
    blockedCalls: "blocked_calls",
    blockedCallsPercentage: "blocked_calls_percentage",
  },
});
