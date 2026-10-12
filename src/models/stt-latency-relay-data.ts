import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latencyEventSchema, type LatencyEvent } from "./latency-event.js";

export type SttLatencyRelayData = {
  /** Session id of the conversation relay. */
  sessionId: string;
  /** Sequence number of the event. */
  sequenceNumber: number;
  sttLatency: LatencyEvent;
};

export const sttLatencyRelayDataSchema: Schema<SttLatencyRelayData> = s.object<SttLatencyRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.int(),
  sttLatency: latencyEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
    sttLatency: "stt_latency",
  },
});
