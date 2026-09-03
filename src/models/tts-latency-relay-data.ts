import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latencyEventSchema, type LatencyEvent } from "./latency-event.js";

export type TtsLatencyRelayData = {
  sessionId: string;
  sequenceNumber: number;
  ttsLatency: LatencyEvent;
};

export const ttsLatencyRelayDataSchema: Schema<TtsLatencyRelayData> = s.object<TtsLatencyRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.number(),
  ttsLatency: latencyEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
    ttsLatency: "tts_latency",
  },
});
