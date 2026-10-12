import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  videoV1RecordingSettingsSchema,
  type VideoV1RecordingSettings,
} from "../models/video-v1-recording-settings.js";
import type { Servers } from "../servers.js";

export class VideoV1RecordingSettingsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Recording settings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRecordingSettings(
    request: VideoV1RecordingSettingsApi.CreateRecordingSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1RecordingSettings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default6("/v1/RecordingSettings/Default"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "AwsCredentialsSid", value: request.awsCredentialsSid, schema: s.optional(s.string()) },
            { name: "EncryptionKeySid", value: request.encryptionKeySid, schema: s.optional(s.string()) },
            { name: "AwsS3Url", value: request.awsS3Url, schema: s.optional(s.string()) },
            { name: "AwsStorageEnabled", value: request.awsStorageEnabled, schema: s.optional(s.boolean()) },
            { name: "EncryptionEnabled", value: request.encryptionEnabled, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1RecordingSettingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Recording settings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecordingSettings(options?: RequestOptions): ApiPromise<VideoV1RecordingSettings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/RecordingSettings/Default"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RecordingSettingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1RecordingSettingsApi {
  export type CreateRecordingSettingsRequest = {
    /**
     * A descriptive string that you create to describe the resource and be shown to users in the
     * console
     */
    friendlyName: string;
    /** The SID of the stored Credential resource. */
    awsCredentialsSid?: string;
    /** The SID of the Public Key resource to use for encryption. */
    encryptionKeySid?: string;
    /**
     * The URL of the AWS S3 bucket where the recordings should be stored. We only support
     * DNS-compliant URLs like `https://documentation-example-twilio-bucket/recordings`, where
     * `recordings` is the path in which you want the recordings to be stored. This URL accepts only
     * URI-valid characters, as described in the [RFC
     * 3986](https://tools.ietf.org/html/rfc3986#section-2).
     */
    awsS3Url?: string;
    /**
     * Whether all recordings should be written to the `aws_s3_url`. When `false`, all recordings
     * are stored in our cloud.
     */
    awsStorageEnabled?: boolean;
    /** Whether all recordings should be stored in an encrypted form. The default is `false`. */
    encryptionEnabled?: boolean;
  };
}
