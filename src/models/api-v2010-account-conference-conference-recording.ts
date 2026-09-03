import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conferenceRecordingEnumSourceSchema,
  type ConferenceRecordingEnumSource,
} from "./conference-recording-enum-source.js";
import {
  conferenceRecordingEnumStatusSchema,
  type ConferenceRecordingEnumStatus,
} from "./conference-recording-enum-status.js";

export type ApiV2010AccountConferenceConferenceRecording = {
  accountSid?: string | null;
  apiVersion?: string | null;
  callSid?: string | null;
  conferenceSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  startTime?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: string | null;
  priceUnit?: string | null;
  status?: ConferenceRecordingEnumStatus;
  channels?: number;
  source?: ConferenceRecordingEnumSource;
  errorCode?: number | null;
  encryptionDetails?: Record<string, unknown> | null;
  uri?: string | null;
};

export const apiV2010AccountConferenceConferenceRecordingSchema: Schema<ApiV2010AccountConferenceConferenceRecording> =
  s.object<ApiV2010AccountConferenceConferenceRecording>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    conferenceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    startTime: s.optionalNullable(s.string()),
    duration: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.string()),
    priceUnit: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => conferenceRecordingEnumStatusSchema)),
    channels: s.optional(s.number()),
    source: s.optional(s.lazy(() => conferenceRecordingEnumSourceSchema)),
    errorCode: s.optionalNullable(s.number()),
    encryptionDetails: s.optionalNullable(s.record(s.string(), s.unknown())),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      callSid: "call_sid",
      conferenceSid: "conference_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      startTime: "start_time",
      priceUnit: "price_unit",
      errorCode: "error_code",
      encryptionDetails: "encryption_details",
    },
  });
