import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberLocalEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberLocalEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberLocalEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberLocalEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberLocalEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberLocalEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberLocalEnumVoiceReceiveMode>(IncomingPhoneNumberLocalEnumVoiceReceiveMode);
