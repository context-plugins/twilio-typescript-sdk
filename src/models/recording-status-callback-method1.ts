import { s, type EnumSchema } from "../core/index.js";

export const RecordingStatusCallbackMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type RecordingStatusCallbackMethod1 =
  | (typeof RecordingStatusCallbackMethod1)[keyof typeof RecordingStatusCallbackMethod1]
  | (string & {});

export const recordingStatusCallbackMethod1Schema: EnumSchema<RecordingStatusCallbackMethod1> =
  s.enumOf<RecordingStatusCallbackMethod1>(RecordingStatusCallbackMethod1);
