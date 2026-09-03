import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languageChangedEventSchema, type LanguageChangedEvent } from "./language-changed-event.js";

export type LanguageChangedRelayData = {
  sessionId: string;
  sequenceNumber: number;
  languageChanged: LanguageChangedEvent;
};

export const languageChangedRelayDataSchema: Schema<LanguageChangedRelayData> =
  s.object<LanguageChangedRelayData>({
    sessionId: s.string(),
    sequenceNumber: s.number(),
    languageChanged: languageChangedEventSchema,
    _keysMap: {
      sessionId: "session_id",
      sequenceNumber: "sequence_number",
      languageChanged: "language_changed",
    },
  });
