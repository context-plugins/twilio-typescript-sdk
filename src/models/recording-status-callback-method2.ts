import { s, type EnumSchema } from "../core/index.js";

export const RecordingStatusCallbackMethod2 = {
  Get: "GET",
  Post: "POST",
} as const;
export type RecordingStatusCallbackMethod2 =
  | (typeof RecordingStatusCallbackMethod2)[keyof typeof RecordingStatusCallbackMethod2]
  | (string & {});

export const recordingStatusCallbackMethod2Schema: EnumSchema<RecordingStatusCallbackMethod2> =
  s.enumOf<RecordingStatusCallbackMethod2>(RecordingStatusCallbackMethod2);
