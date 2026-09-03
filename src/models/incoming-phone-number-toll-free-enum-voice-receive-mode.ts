import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberTollFreeEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberTollFreeEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberTollFreeEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberTollFreeEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberTollFreeEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberTollFreeEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberTollFreeEnumVoiceReceiveMode>(IncomingPhoneNumberTollFreeEnumVoiceReceiveMode);
