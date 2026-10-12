import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callRecordingEnumSourceSchema, type CallRecordingEnumSource } from "./call-recording-enum-source.js";
import { callRecordingEnumStatusSchema, type CallRecordingEnumStatus } from "./call-recording-enum-status.js";

export type ApiV2010AccountCallCallRecording = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Recording resource.
   */
  accountSid?: string | null;
  /** The API version used to make the recording. */
  apiVersion?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Recording
   * resource is associated with.
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
   * The date and time in GMT that the resource was last updated, specified in [RFC
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
  price?: number | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * How to decrypt the recording if it was encrypted using [Call Recording
   * Encryption](https://www.twilio.com/docs/voice/tutorials/voice-recording-encryption) feature.
   */
  encryptionDetails?: Record<string, unknown> | null;
  /** The currency used in the `price` property. Example: `USD`. */
  priceUnit?: string | null;
  /**
   * The status of the recording. Can be: `processing`, `completed` and `absent`. For more detailed
   * statuses on in-progress recordings, check out how to [Update a Recording
   * Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
   */
  status?: CallRecordingEnumStatus;
  /**
   * The number of channels in the final recording file. Can be: `1`, or `2`. Separating a two leg
   * call into two separate channels of the recording file is supported in
   * [Dial](https://www.twilio.com/docs/voice/twiml/dial#attributes-record) and [Outbound Rest
   * API](https://www.twilio.com/docs/voice/make-calls) record options.
   *
   * @default 0
   */
  channels?: number;
  /**
   * How the recording was created. Can be: `DialVerb`, `Conference`, `OutboundAPI`, `Trunking`,
   * `RecordVerb`, `StartCallRecordingAPI`, and `StartConferenceRecordingAPI`.
   */
  source?: CallRecordingEnumSource;
  /**
   * The error code that describes why the recording is `absent`. The error code is described in our
   * [Error Dictionary](https://www.twilio.com/docs/api/errors). This value is null if the recording
   * `status` is not `absent`.
   */
  errorCode?: number | null;
  /** The recorded track. Can be: `inbound`, `outbound`, or `both`. */
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
    price: s.optionalNullable(s.float64()),
    uri: s.optionalNullable(s.string()),
    encryptionDetails: s.optionalNullable(s.record(s.string(), s.unknown())),
    priceUnit: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => callRecordingEnumStatusSchema)),
    channels: s.defaulted(s.int(), 0),
    source: s.optional(s.lazy(() => callRecordingEnumSourceSchema)),
    errorCode: s.optionalNullable(s.int()),
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
