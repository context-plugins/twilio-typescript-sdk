import { s, type Schema } from "../core/index.js";
import { latencyEventSchema, type LatencyEvent } from "./latency-event.js";

export type SttLatencyRelayData = {
  sessionId: string;
  sequenceNumber: number;
  sttLatency: LatencyEvent;
};

export const sttLatencyRelayDataSchema: Schema<SttLatencyRelayData> = s.object<SttLatencyRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.number(),
  sttLatency: latencyEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
    sttLatency: "stt_latency",
  },
});
