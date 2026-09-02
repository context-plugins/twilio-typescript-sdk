import { s, type EnumSchema } from "../core/index.js";

export const ConferenceEnumUpdateStatus = {
  Completed: "completed",
} as const;
export type ConferenceEnumUpdateStatus =
  | (typeof ConferenceEnumUpdateStatus)[keyof typeof ConferenceEnumUpdateStatus]
  | (string & {});

export const conferenceEnumUpdateStatusSchema: EnumSchema<ConferenceEnumUpdateStatus> =
  s.enumOf<ConferenceEnumUpdateStatus>(ConferenceEnumUpdateStatus);
