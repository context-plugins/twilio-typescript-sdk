import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceEnumConferenceStatus = {
  InProgress: "in_progress",
  NotStarted: "not_started",
  Completed: "completed",
  SummaryTimeout: "summary_timeout",
} as const;
export type ConferenceEnumConferenceStatus =
  | (typeof ConferenceEnumConferenceStatus)[keyof typeof ConferenceEnumConferenceStatus]
  | (string & {});

export const conferenceEnumConferenceStatusSchema: EnumSchema<ConferenceEnumConferenceStatus> =
  s.enumOf<ConferenceEnumConferenceStatus>(ConferenceEnumConferenceStatus);
