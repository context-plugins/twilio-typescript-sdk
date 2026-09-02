import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberEnumVoiceReceiveMode>(IncomingPhoneNumberEnumVoiceReceiveMode);
