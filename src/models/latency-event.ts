import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LatencyEvent = {
  latencyMs?: number;
};

export const latencyEventSchema: Schema<LatencyEvent> = s.object<LatencyEvent>({
  latencyMs: s.optional(s.number()),
  _keysMap: {
    latencyMs: "latency_ms",
  },
});
