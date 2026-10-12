import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callWrapUpEventSchema, type CallWrapUpEvent } from "./call-wrap-up-event.js";

export type CallWrapUpRelayData = {
  /** Session id of the conversation relay. */
  sessionId: string;
  /** Sequence number of the event. */
  sequenceNumber: number;
  callWrapUp: CallWrapUpEvent;
};

export const callWrapUpRelayDataSchema: Schema<CallWrapUpRelayData> = s.object<CallWrapUpRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.int(),
  callWrapUp: callWrapUpEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
    callWrapUp: "call_wrap_up",
  },
});
