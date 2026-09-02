import { s, type EnumSchema } from "../core/index.js";

export const SessionEnumMode = {
  MessageOnly: "message-only",
  VoiceOnly: "voice-only",
  VoiceAndMessage: "voice-and-message",
} as const;
export type SessionEnumMode = (typeof SessionEnumMode)[keyof typeof SessionEnumMode] | (string & {});

export const sessionEnumModeSchema: EnumSchema<SessionEnumMode> = s.enumOf<SessionEnumMode>(SessionEnumMode);
