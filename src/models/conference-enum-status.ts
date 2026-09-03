import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceEnumStatus = {
  Init: "init",
  InProgress: "in-progress",
  Completed: "completed",
} as const;
export type ConferenceEnumStatus =
  | (typeof ConferenceEnumStatus)[keyof typeof ConferenceEnumStatus]
  | (string & {});

export const conferenceEnumStatusSchema: EnumSchema<ConferenceEnumStatus> =
  s.enumOf<ConferenceEnumStatus>(ConferenceEnumStatus);
