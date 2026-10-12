import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recordingEnumSourceSchema, type RecordingEnumSource } from "./recording-enum-source.js";
import { recordingEnumStatusSchema, type RecordingEnumStatus } from "./recording-enum-status.js";

export type ApiV2010AccountRecording = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Recording resource.
   */
  accountSid?: string | null;
  /** The API version used during the recording. */
  apiVersion?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording
   * resource is associated with. This will always refer to the parent leg of a two-leg call.
   */
  callSid?: string | null;
  /**
   * The Conference SID that identifies the conference associated with the recording, if a
   * conference recording.
   */
  conferenceSid?: string | null;
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
  /**
   * The start time of the recording in GMT and in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  startTime?: string | null;
  /** The length of the recording in seconds. */
  duration?: string | null;
  /** The unique string that that we created to identify the Recording resource. */
  sid?: string | null;
  /** The one-time cost of creating the recording in the `price_unit` currency. */
  price?: string | null;
  /** The currency used in the `price` property. Example: `USD`. */
  priceUnit?: string | null;
  /**
   * The status of the recording. Can be: `processing`, `completed`, `absent` or `deleted`. For
   * information about more detailed statuses on in-progress recordings, check out how to [Update a
   * Recording
   * Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
   */
  status?: RecordingEnumStatus;
  /**
   * The number of channels in the recording resource. For information on specifying the number of
   * channels in the downloaded recording file, check out [Fetch a Recording’s media
   * file](https://www.twilio.com/docs/voice/api/recording#download-dual-channel-media-file).
   */
  channels?: number | null;
  /**
   * How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`,
   * `RecordVerb`, `StartCallRecordingAPI`, and `StartConferenceRecordingAPI`.
   */
  source?: RecordingEnumSource;
  /**
   * The error code that describes why the recording is `absent`. The error code is described in our
   * [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording
   * `status` is not `absent`.
   */
  errorCode?: number | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * How to decrypt the recording if it was encrypted using [Call Recording
   * Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature.
   */
  encryptionDetails?: Record<string, unknown> | null;
  /** A list of related resources identified by their relative URIs. */
  subresourceUris?: Record<string, unknown> | null;
  /**
   * The URL of the media file associated with this recording resource. When stored externally, this
   * is the full URL location of the media file.
   */
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
    channels: s.optionalNullable(s.int()),
    source: s.optional(s.lazy(() => recordingEnumSourceSchema)),
    errorCode: s.optionalNullable(s.int()),
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
