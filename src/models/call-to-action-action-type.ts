import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallToActionActionType = {
  Url: "URL",
  PhoneNumber: "PHONE_NUMBER",
  CopyCode: "COPY_CODE",
  VoiceCall: "VOICE_CALL",
  VoiceCallRequest: "VOICE_CALL_REQUEST",
} as const;
export type CallToActionActionType =
  | (typeof CallToActionActionType)[keyof typeof CallToActionActionType]
  | (string & {});

export const callToActionActionTypeSchema: EnumSchema<CallToActionActionType> =
  s.enumOf<CallToActionActionType>(CallToActionActionType);
