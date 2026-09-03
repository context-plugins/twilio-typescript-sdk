import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceParticipantEnumCallDirection = {
  Inbound: "inbound",
  Outbound: "outbound",
} as const;
export type ConferenceParticipantEnumCallDirection =
  | (typeof ConferenceParticipantEnumCallDirection)[keyof typeof ConferenceParticipantEnumCallDirection]
  | (string & {});

export const conferenceParticipantEnumCallDirectionSchema: EnumSchema<ConferenceParticipantEnumCallDirection> =
  s.enumOf<ConferenceParticipantEnumCallDirection>(ConferenceParticipantEnumCallDirection);
