import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`,
 * `RecordVerb`, `StartCallRecordingAPI`, `StartConferenceRecordingAPI`.
 */
export const ConferenceRecordingEnumSource = {
  DialVerb: "DialVerb",
  Conference: "Conference",
  OutboundApi: "OutboundAPI",
  Trunking: "Trunking",
  RecordVerb: "RecordVerb",
  StartCallRecordingApi: "StartCallRecordingAPI",
  StartConferenceRecordingApi: "StartConferenceRecordingAPI",
} as const;
export type ConferenceRecordingEnumSource =
  | (typeof ConferenceRecordingEnumSource)[keyof typeof ConferenceRecordingEnumSource]
  | (string & {});

export const conferenceRecordingEnumSourceSchema: EnumSchema<ConferenceRecordingEnumSource> =
  s.enumOf<ConferenceRecordingEnumSource>(ConferenceRecordingEnumSource);
