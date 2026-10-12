import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Mode of the Session. Can be: `message-only`, `voice-only`, or `voice-and-message`. */
export const SessionEnumMode = {
  MessageOnly: "message-only",
  VoiceOnly: "voice-only",
  VoiceAndMessage: "voice-and-message",
} as const;
export type SessionEnumMode = (typeof SessionEnumMode)[keyof typeof SessionEnumMode] | (string & {});

export const sessionEnumModeSchema: EnumSchema<SessionEnumMode> = s.enumOf<SessionEnumMode>(SessionEnumMode);
