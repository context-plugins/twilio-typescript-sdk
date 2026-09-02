import { s, type EnumSchema } from "../core/index.js";

export const ConferenceParticipantEnumCallDirection = {
  Inbound: "inbound",
  Outbound: "outbound",
} as const;
export type ConferenceParticipantEnumCallDirection =
  | (typeof ConferenceParticipantEnumCallDirection)[keyof typeof ConferenceParticipantEnumCallDirection]
  | (string & {});

export const conferenceParticipantEnumCallDirectionSchema: EnumSchema<ConferenceParticipantEnumCallDirection> =
  s.enumOf<ConferenceParticipantEnumCallDirection>(ConferenceParticipantEnumCallDirection);
