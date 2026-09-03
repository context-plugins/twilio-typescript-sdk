import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecordingEnumSource = {
  DialVerb: "DialVerb",
  Conference: "Conference",
  OutboundApi: "OutboundAPI",
  Trunking: "Trunking",
  RecordVerb: "RecordVerb",
  StartCallRecordingApi: "StartCallRecordingAPI",
  StartConferenceRecordingApi: "StartConferenceRecordingAPI",
} as const;
export type RecordingEnumSource =
  | (typeof RecordingEnumSource)[keyof typeof RecordingEnumSource]
  | (string & {});

export const recordingEnumSourceSchema: EnumSchema<RecordingEnumSource> =
  s.enumOf<RecordingEnumSource>(RecordingEnumSource);
