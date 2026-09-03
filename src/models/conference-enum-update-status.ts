import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceEnumUpdateStatus = {
  Completed: "completed",
} as const;
export type ConferenceEnumUpdateStatus =
  | (typeof ConferenceEnumUpdateStatus)[keyof typeof ConferenceEnumUpdateStatus]
  | (string & {});

export const conferenceEnumUpdateStatusSchema: EnumSchema<ConferenceEnumUpdateStatus> =
  s.enumOf<ConferenceEnumUpdateStatus>(ConferenceEnumUpdateStatus);
