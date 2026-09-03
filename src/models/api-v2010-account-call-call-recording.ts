import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callRecordingEnumSourceSchema, type CallRecordingEnumSource } from "./call-recording-enum-source.js";
import { callRecordingEnumStatusSchema, type CallRecordingEnumStatus } from "./call-recording-enum-status.js";

export type ApiV2010AccountCallCallRecording = {
  accountSid?: string | null;
  apiVersion?: string | null;
  callSid?: string | null;
  conferenceSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  startTime?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: number | null;
  uri?: string | null;
  encryptionDetails?: Record<string, unknown> | null;
  priceUnit?: string | null;
  status?: CallRecordingEnumStatus;
  channels?: number;
  source?: CallRecordingEnumSource;
  errorCode?: number | null;
  track?: string | null;
};

export const apiV2010AccountCallCallRecordingSchema: Schema<ApiV2010AccountCallCallRecording> =
  s.object<ApiV2010AccountCallCallRecording>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    conferenceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    startTime: s.optionalNullable(s.string()),
    duration: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.number()),
    uri: s.optionalNullable(s.string()),
    encryptionDetails: s.optionalNullable(s.record(s.string(), s.unknown())),
    priceUnit: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => callRecordingEnumStatusSchema)),
    channels: s.optional(s.number()),
    source: s.optional(s.lazy(() => callRecordingEnumSourceSchema)),
    errorCode: s.optionalNullable(s.number()),
    track: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      callSid: "call_sid",
      conferenceSid: "conference_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      startTime: "start_time",
      encryptionDetails: "encryption_details",
      priceUnit: "price_unit",
      errorCode: "error_code",
    },
  });
