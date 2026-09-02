import { s, type Schema } from "../core/index.js";
import { callWrapUpEventSchema, type CallWrapUpEvent } from "./call-wrap-up-event.js";

export type CallWrapUpRelayData = {
  sessionId: string;
  sequenceNumber: number;
  callWrapUp: CallWrapUpEvent;
};

export const callWrapUpRelayDataSchema: Schema<CallWrapUpRelayData> = s.object<CallWrapUpRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.number(),
  callWrapUp: callWrapUpEventSchema,
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
    callWrapUp: "call_wrap_up",
  },
});
