import { s, type EnumSchema } from "../core/index.js";

export const ConferenceRecordingStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type ConferenceRecordingStatusCallbackMethod =
  | (typeof ConferenceRecordingStatusCallbackMethod)[keyof typeof ConferenceRecordingStatusCallbackMethod]
  | (string & {});

export const conferenceRecordingStatusCallbackMethodSchema: EnumSchema<ConferenceRecordingStatusCallbackMethod> =
  s.enumOf<ConferenceRecordingStatusCallbackMethod>(ConferenceRecordingStatusCallbackMethod);
