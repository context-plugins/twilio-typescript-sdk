import { s, type Schema } from "../core/index.js";
import { errorEventSchema, type ErrorEvent } from "./error-event.js";

export type ErrorRelayData = {
  sessionId: string;
  sequenceNumber: number;
  error: ErrorEvent;
};

export const errorRelayDataSchema: Schema<ErrorRelayData> = s.object<ErrorRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.number(),
  error: errorEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
  },
});
