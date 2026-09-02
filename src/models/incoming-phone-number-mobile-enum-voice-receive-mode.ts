import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberMobileEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberMobileEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberMobileEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberMobileEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberMobileEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberMobileEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberMobileEnumVoiceReceiveMode>(IncomingPhoneNumberMobileEnumVoiceReceiveMode);
