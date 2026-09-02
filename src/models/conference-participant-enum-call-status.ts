import { s, type EnumSchema } from "../core/index.js";

export const ConferenceParticipantEnumCallStatus = {
  Answered: "answered",
  Completed: "completed",
  Busy: "busy",
  Fail: "fail",
  Noanswer: "noanswer",
  Ringing: "ringing",
  Canceled: "canceled",
} as const;
export type ConferenceParticipantEnumCallStatus =
  | (typeof ConferenceParticipantEnumCallStatus)[keyof typeof ConferenceParticipantEnumCallStatus]
  | (string & {});

export const conferenceParticipantEnumCallStatusSchema: EnumSchema<ConferenceParticipantEnumCallStatus> =
  s.enumOf<ConferenceParticipantEnumCallStatus>(ConferenceParticipantEnumCallStatus);
