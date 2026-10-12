import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationEventSchema, type ConfigurationEvent } from "./configuration-event.js";

export type ConfigurationsRelayData = {
  /** Session id of the conversation relay. */
  sessionId: string;
  /** Sequence number of the event. */
  sequenceNumber: number;
  configurations: ConfigurationEvent;
};

export const configurationsRelayDataSchema: Schema<ConfigurationsRelayData> =
  s.object<ConfigurationsRelayData>({
    sessionId: s.string(),
    sequenceNumber: s.int(),
    configurations: configurationEventSchema,
    _keysMap: {
      sessionId: "session_id",
      sequenceNumber: "sequence_number",
    },
  });
