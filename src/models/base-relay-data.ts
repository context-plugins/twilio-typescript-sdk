import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseRelayData = {
  /** Session id of the conversation relay. */
  sessionId: string;
  /** Sequence number of the event. */
  sequenceNumber: number;
};

export const baseRelayDataSchema: Schema<BaseRelayData> = s.object<BaseRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.int(),
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
  },
});
