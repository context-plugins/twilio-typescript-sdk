import { s, type EnumSchema } from "../core/index.js";

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
