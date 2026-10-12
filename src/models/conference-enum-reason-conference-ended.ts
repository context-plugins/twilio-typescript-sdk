import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason why a conference ended. When a conference is in progress, will be `null`. When
 * conference is completed, can be: `conference-ended-via-api`,
 * `participant-with-end-conference-on-exit-left`, `participant-with-end-conference-on-exit-kicked`,
 * `last-participant-kicked`, or `last-participant-left`.
 */
export const ConferenceEnumReasonConferenceEnded = {
  ConferenceEndedViaApi: "conference-ended-via-api",
  ParticipantWithEndConferenceOnExitLeft: "participant-with-end-conference-on-exit-left",
  ParticipantWithEndConferenceOnExitKicked: "participant-with-end-conference-on-exit-kicked",
  LastParticipantKicked: "last-participant-kicked",
  LastParticipantLeft: "last-participant-left",
} as const;
export type ConferenceEnumReasonConferenceEnded =
  | (typeof ConferenceEnumReasonConferenceEnded)[keyof typeof ConferenceEnumReasonConferenceEnded]
  | (string & {});

export const conferenceEnumReasonConferenceEndedSchema: EnumSchema<ConferenceEnumReasonConferenceEnded> =
  s.enumOf<ConferenceEnumReasonConferenceEnded>(ConferenceEnumReasonConferenceEnded);
