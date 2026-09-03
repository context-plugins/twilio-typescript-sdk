import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceEnumProcessingState = {
  Complete: "complete",
  InProgress: "in_progress",
  Timeout: "timeout",
} as const;
export type ConferenceEnumProcessingState =
  | (typeof ConferenceEnumProcessingState)[keyof typeof ConferenceEnumProcessingState]
  | (string & {});

export const conferenceEnumProcessingStateSchema: EnumSchema<ConferenceEnumProcessingState> =
  s.enumOf<ConferenceEnumProcessingState>(ConferenceEnumProcessingState);
