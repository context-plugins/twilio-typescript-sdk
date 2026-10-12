import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { interruptEventSchema, type InterruptEvent } from "./interrupt-event.js";

export type InterruptRelayData = {
  /** Session id of the conversation relay. */
  sessionId: string;
  /** Sequence number of the event. */
  sequenceNumber: number;
  interrupt: InterruptEvent;
};

export const interruptRelayDataSchema: Schema<InterruptRelayData> = s.object<InterruptRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.int(),
  interrupt: interruptEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
  },
});
