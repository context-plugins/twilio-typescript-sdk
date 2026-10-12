import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LatencyEvent = {
  /** Latency in milliseconds. */
  latencyMs?: number;
};

export const latencyEventSchema: Schema<LatencyEvent> = s.object<LatencyEvent>({
  latencyMs: s.optional(s.int()),
  _keysMap: {
    latencyMs: "latency_ms",
  },
});
