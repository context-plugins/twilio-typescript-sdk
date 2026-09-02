import { s, type EnumSchema } from "../core/index.js";

export const CardActionType = {
  Url: "URL",
  PhoneNumber: "PHONE_NUMBER",
  QuickReply: "QUICK_REPLY",
  CopyCode: "COPY_CODE",
  VoiceCall: "VOICE_CALL",
} as const;
export type CardActionType = (typeof CardActionType)[keyof typeof CardActionType] | (string & {});

export const cardActionTypeSchema: EnumSchema<CardActionType> = s.enumOf<CardActionType>(CardActionType);
