import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceParticipantEnumCallType = {
  Carrier: "carrier",
  Client: "client",
  Sip: "sip",
} as const;
export type ConferenceParticipantEnumCallType =
  | (typeof ConferenceParticipantEnumCallType)[keyof typeof ConferenceParticipantEnumCallType]
  | (string & {});

export const conferenceParticipantEnumCallTypeSchema: EnumSchema<ConferenceParticipantEnumCallType> =
  s.enumOf<ConferenceParticipantEnumCallType>(ConferenceParticipantEnumCallType);
