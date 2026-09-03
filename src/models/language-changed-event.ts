import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LanguageChangedEvent = {
  ttsLanguageCode?: string;
  transcriptionLanguageCode?: string;
};

export const languageChangedEventSchema: Schema<LanguageChangedEvent> = s.object<LanguageChangedEvent>({
  ttsLanguageCode: s.optional(s.string()),
  transcriptionLanguageCode: s.optional(s.string()),
  _keysMap: {
    ttsLanguageCode: "tts_language_code",
    transcriptionLanguageCode: "transcription_language_code",
  },
});
