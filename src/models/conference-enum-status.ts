import { s, type EnumSchema } from "../core/index.js";

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
