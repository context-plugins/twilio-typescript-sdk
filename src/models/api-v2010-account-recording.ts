import { s, type Schema } from "../core/index.js";
import { recordingEnumSourceSchema, type RecordingEnumSource } from "./recording-enum-source.js";
import { recordingEnumStatusSchema, type RecordingEnumStatus } from "./recording-enum-status.js";

export type ApiV2010AccountRecording = {
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
  status?: RecordingEnumStatus;
  channels?: number | null;
  source?: RecordingEnumSource;
  errorCode?: number | null;
  uri?: string | null;
  encryptionDetails?: Record<string, unknown> | null;
  subresourceUris?: Record<string, unknown> | null;
  mediaUrl?: string | null;
};

export const apiV2010AccountRecordingSchema: Schema<ApiV2010AccountRecording> =
  s.object<ApiV2010AccountRecording>({
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
    status: s.optional(s.lazy(() => recordingEnumStatusSchema)),
    channels: s.optionalNullable(s.number()),
    source: s.optional(s.lazy(() => recordingEnumSourceSchema)),
    errorCode: s.optionalNullable(s.number()),
    uri: s.optionalNullable(s.string()),
    encryptionDetails: s.optionalNullable(s.record(s.string(), s.unknown())),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    mediaUrl: s.optionalNullable(s.string()),
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
      subresourceUris: "subresource_uris",
      mediaUrl: "media_url",
    },
  });
