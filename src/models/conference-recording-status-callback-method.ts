import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceRecordingStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type ConferenceRecordingStatusCallbackMethod =
  | (typeof ConferenceRecordingStatusCallbackMethod)[keyof typeof ConferenceRecordingStatusCallbackMethod]
  | (string & {});

export const conferenceRecordingStatusCallbackMethodSchema: EnumSchema<ConferenceRecordingStatusCallbackMethod> =
  s.enumOf<ConferenceRecordingStatusCallbackMethod>(ConferenceRecordingStatusCallbackMethod);
