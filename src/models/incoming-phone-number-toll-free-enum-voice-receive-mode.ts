import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberTollFreeEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberTollFreeEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberTollFreeEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberTollFreeEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberTollFreeEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberTollFreeEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberTollFreeEnumVoiceReceiveMode>(IncomingPhoneNumberTollFreeEnumVoiceReceiveMode);
