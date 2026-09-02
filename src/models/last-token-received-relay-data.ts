import { s, type Schema } from "../core/index.js";
import { lastTokenReceivedEventSchema, type LastTokenReceivedEvent } from "./last-token-received-event.js";

export type LastTokenReceivedRelayData = {
  sessionId: string;
  sequenceNumber: number;
  lastTokenReceived: LastTokenReceivedEvent;
};

export const lastTokenReceivedRelayDataSchema: Schema<LastTokenReceivedRelayData> =
  s.object<LastTokenReceivedRelayData>({
    sessionId: s.string(),
    sequenceNumber: s.number(),
    lastTokenReceived: lastTokenReceivedEventSchema,
    _keysMap: {
      sessionId: "session_id",
      sequenceNumber: "sequence_number",
      lastTokenReceived: "last_token_received",
    },
  });
