import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transcriptionEnumStatusSchema, type TranscriptionEnumStatus } from "./transcription-enum-status.js";

export type ApiV2010AccountTranscription = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Transcription resource.
   */
  accountSid?: string | null;
  /** The API version used to create the transcription. */
  apiVersion?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The duration of the transcribed audio in seconds. */
  duration?: string | null;
  /**
   * The charge for the transcript in the currency associated with the account. This value is
   * populated after the transcript is complete so it may not be available immediately.
   */
  price?: number | null;
  /**
   * The currency in which `price` is measured, in [ISO
   * 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`,
   * `jpy`).
   */
  priceUnit?: string | null;
  /**
   * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the
   * transcription was created.
   */
  recordingSid?: string | null;
  /** The unique string that that we created to identify the Transcription resource. */
  sid?: string | null;
  /** The status of the transcription. Can be: `in-progress`, `completed`, `failed`. */
  status?: TranscriptionEnumStatus;
  /** The text content of the transcription. */
  transcriptionText?: string | null;
  /** The transcription type. Can only be: `fast`. */
  type?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
};

export const apiV2010AccountTranscriptionSchema: Schema<ApiV2010AccountTranscription> =
  s.object<ApiV2010AccountTranscription>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    duration: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.float64()),
    priceUnit: s.optionalNullable(s.string()),
    recordingSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => transcriptionEnumStatusSchema)),
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
