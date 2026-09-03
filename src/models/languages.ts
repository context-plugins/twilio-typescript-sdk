import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Languages = {
  ttsProvider?: string;
  voice?: string;
  transcriptionProvider?: string;
  speechModel?: string;
};

export const languagesSchema: Schema<Languages> = s.object<Languages>({
  ttsProvider: s.optional(s.string()),
  voice: s.optional(s.string()),
  transcriptionProvider: s.optional(s.string()),
  speechModel: s.optional(s.string()),
  _keysMap: {
    ttsProvider: "tts_provider",
    transcriptionProvider: "transcription_provider",
    speechModel: "speech_model",
  },
});
