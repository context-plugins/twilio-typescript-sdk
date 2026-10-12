import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorEventSchema, type ErrorEvent } from "./error-event.js";

export type ErrorRelayData = {
  /** Session id of the conversation relay. */
  sessionId: string;
  /** Sequence number of the event. */
  sequenceNumber: number;
  error: ErrorEvent;
};

export const errorRelayDataSchema: Schema<ErrorRelayData> = s.object<ErrorRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.int(),
  error: errorEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
  },
});
