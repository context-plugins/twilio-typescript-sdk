import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberLocalEnumVoiceReceiveMode = {
  Voice: "voice",
  Fax: "fax",
} as const;
export type IncomingPhoneNumberLocalEnumVoiceReceiveMode =
  | (typeof IncomingPhoneNumberLocalEnumVoiceReceiveMode)[keyof typeof IncomingPhoneNumberLocalEnumVoiceReceiveMode]
  | (string & {});

export const incomingPhoneNumberLocalEnumVoiceReceiveModeSchema: EnumSchema<IncomingPhoneNumberLocalEnumVoiceReceiveMode> =
  s.enumOf<IncomingPhoneNumberLocalEnumVoiceReceiveMode>(IncomingPhoneNumberLocalEnumVoiceReceiveMode);
