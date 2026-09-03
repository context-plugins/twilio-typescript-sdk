import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecordingStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type RecordingStatusCallbackMethod =
  | (typeof RecordingStatusCallbackMethod)[keyof typeof RecordingStatusCallbackMethod]
  | (string & {});

export const recordingStatusCallbackMethodSchema: EnumSchema<RecordingStatusCallbackMethod> =
  s.enumOf<RecordingStatusCallbackMethod>(RecordingStatusCallbackMethod);
