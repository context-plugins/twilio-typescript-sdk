import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceParticipantEnumProcessingState = {
  Complete: "complete",
  InProgress: "in_progress",
  Timeout: "timeout",
} as const;
export type ConferenceParticipantEnumProcessingState =
  | (typeof ConferenceParticipantEnumProcessingState)[keyof typeof ConferenceParticipantEnumProcessingState]
  | (string & {});

export const conferenceParticipantEnumProcessingStateSchema: EnumSchema<ConferenceParticipantEnumProcessingState> =
  s.enumOf<ConferenceParticipantEnumProcessingState>(ConferenceParticipantEnumProcessingState);
