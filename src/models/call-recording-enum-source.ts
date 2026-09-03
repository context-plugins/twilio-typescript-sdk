import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallRecordingEnumSource = {
  DialVerb: "DialVerb",
  Conference: "Conference",
  OutboundApi: "OutboundAPI",
  Trunking: "Trunking",
  RecordVerb: "RecordVerb",
  StartCallRecordingApi: "StartCallRecordingAPI",
  StartConferenceRecordingApi: "StartConferenceRecordingAPI",
} as const;
export type CallRecordingEnumSource =
  | (typeof CallRecordingEnumSource)[keyof typeof CallRecordingEnumSource]
  | (string & {});

export const callRecordingEnumSourceSchema: EnumSchema<CallRecordingEnumSource> =
  s.enumOf<CallRecordingEnumSource>(CallRecordingEnumSource);
