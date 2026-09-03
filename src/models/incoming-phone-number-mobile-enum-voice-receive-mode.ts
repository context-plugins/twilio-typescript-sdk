import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberMobileEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberMobileEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberMobileEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberMobileEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberMobileEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberMobileEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberMobileEnumVoiceReceiveMode>(IncomingPhoneNumberMobileEnumVoiceReceiveMode);
