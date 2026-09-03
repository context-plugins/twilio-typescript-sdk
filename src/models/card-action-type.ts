import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardActionType = {
  Url: "URL",
  PhoneNumber: "PHONE_NUMBER",
  QuickReply: "QUICK_REPLY",
  CopyCode: "COPY_CODE",
  VoiceCall: "VOICE_CALL",
} as const;
export type CardActionType = (typeof CardActionType)[keyof typeof CardActionType] | (string & {});

export const cardActionTypeSchema: EnumSchema<CardActionType> = s.enumOf<CardActionType>(CardActionType);
