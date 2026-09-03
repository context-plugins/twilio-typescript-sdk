import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recordingTranscriptionEnumStatusSchema,
  type RecordingTranscriptionEnumStatus,
} from "./recording-transcription-enum-status.js";

export type ApiV2010AccountRecordingRecordingTranscription = {
  accountSid?: string | null;
  apiVersion?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  duration?: string | null;
  price?: number | null;
  priceUnit?: string | null;
  recordingSid?: string | null;
  sid?: string | null;
  status?: RecordingTranscriptionEnumStatus;
  transcriptionText?: string | null;
  type?: string | null;
  uri?: string | null;
};

export const apiV2010AccountRecordingRecordingTranscriptionSchema: Schema<ApiV2010AccountRecordingRecordingTranscription> =
  s.object<ApiV2010AccountRecordingRecordingTranscription>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    duration: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.number()),
    priceUnit: s.optionalNullable(s.string()),
    recordingSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => recordingTranscriptionEnumStatusSchema)),
    transcriptionText: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      priceUnit: "price_unit",
      recordingSid: "recording_sid",
      transcriptionText: "transcription_text",
    },
  });
