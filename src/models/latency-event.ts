import { s, type Schema } from "../core/index.js";

export type LatencyEvent = {
  latencyMs?: number;
};

export const latencyEventSchema: Schema<LatencyEvent> = s.object<LatencyEvent>({
  latencyMs: s.optional(s.number()),
  _keysMap: {
    latencyMs: "latency_ms",
  },
});
