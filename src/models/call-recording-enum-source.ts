import { s, type EnumSchema } from "../core/index.js";

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
