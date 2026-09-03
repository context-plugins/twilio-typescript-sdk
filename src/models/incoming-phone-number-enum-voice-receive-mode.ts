import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberEnumVoiceReceiveMode>(IncomingPhoneNumberEnumVoiceReceiveMode);
