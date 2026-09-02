import { s, type Schema } from "../core/index.js";

export type BaseRelayData = {
  sessionId: string;
  sequenceNumber: number;
};

export const baseRelayDataSchema: Schema<BaseRelayData> = s.object<BaseRelayData>({
  sessionId: s.string(),
  sequenceNumber: s.number(),
  _keysMap: {
    sessionId: "session_id",
    sequenceNumber: "sequence_number",
  },
});
