import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST`
 * and defaults to `POST`.
 */
export const RecordingStatusCallbackMethod2 = {
  Get: "GET",
  Post: "POST",
} as const;
export type RecordingStatusCallbackMethod2 =
  | (typeof RecordingStatusCallbackMethod2)[keyof typeof RecordingStatusCallbackMethod2]
  | (string & {});

export const recordingStatusCallbackMethod2Schema: EnumSchema<RecordingStatusCallbackMethod2> =
  s.enumOf<RecordingStatusCallbackMethod2>(RecordingStatusCallbackMethod2);
