import { s, type Schema } from "../core/index.js";
import { interruptEventSchema, type InterruptEvent } from "./interrupt-event.js";

export type InterruptRelayData = {
  sessionId: string;
  sequenceNumber: number;
  interrupt: InterruptEvent;
};

export const interruptRelayDataSchema: Schema<InterruptRelayData> = s.object<InterruptRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.number(),
  interrupt: interruptEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
  },
});
