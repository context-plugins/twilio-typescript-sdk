import { s, type Schema } from "../core/index.js";
import { configurationEventSchema, type ConfigurationEvent } from "./configuration-event.js";

export type ConfigurationsRelayData = {
  sessionId: string;
  sequenceNumber: number;
  configurations: ConfigurationEvent;
};

export const configurationsRelayDataSchema: Schema<ConfigurationsRelayData> =
  s.object<ConfigurationsRelayData>({
    sessionId: s.string(),
    sequenceNumber: s.number(),
    configurations: configurationEventSchema,
    _keysMap: {
      sessionId: "session_id",
      sequenceNumber: "sequence_number",
    },
  });
