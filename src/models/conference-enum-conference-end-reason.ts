import { s, type EnumSchema } from "../core/index.js";

export const ConferenceEnumConferenceEndReason = {
  LastParticipantLeft: "last_participant_left",
  ConferenceEndedViaApi: "conference_ended_via_api",
  ParticipantWithEndConferenceOnExitLeft: "participant_with_end_conference_on_exit_left",
  LastParticipantKicked: "last_participant_kicked",
  ParticipantWithEndConferenceOnExitKicked: "participant_with_end_conference_on_exit_kicked",
} as const;
export type ConferenceEnumConferenceEndReason =
  | (typeof ConferenceEnumConferenceEndReason)[keyof typeof ConferenceEnumConferenceEndReason]
  | (string & {});

export const conferenceEnumConferenceEndReasonSchema: EnumSchema<ConferenceEnumConferenceEndReason> =
  s.enumOf<ConferenceEnumConferenceEndReason>(ConferenceEnumConferenceEndReason);
