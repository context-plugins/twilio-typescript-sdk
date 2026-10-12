import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountRecordingRecordingTranscriptionSchema,
  type ApiV2010AccountRecordingRecordingTranscription,
} from "../models/api-v2010-account-recording-recording-transcription.js";
import {
  listRecordingTranscriptionResponseSchema,
  type ListRecordingTranscriptionResponse,
} from "../models/list-recording-transcription-response.js";
import type { Servers } from "../servers.js";

export class Api20100401RecordingTranscription {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * References to text transcriptions of call recordings
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecordingTranscription(
    request: Api20100401RecordingTranscription.DeleteRecordingTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "RecordingSid", value: request.recordingSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * References to text transcriptions of call recordings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecordingTranscription(
    request: Api20100401RecordingTranscription.FetchRecordingTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecordingRecordingTranscription, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "RecordingSid", value: request.recordingSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountRecordingRecordingTranscriptionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * References to text transcriptions of call recordings
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecordingTranscription(
    request: Api20100401RecordingTranscription.ListRecordingTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingTranscriptionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "RecordingSid", value: request.recordingSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingTranscriptionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401RecordingTranscription {
  export type DeleteRecordingTranscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Transcription resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the
     * transcription to delete.
     */
    recordingSid: string;
    /** The Twilio-provided string that uniquely identifies the Transcription resource to delete. */
    sid: string;
  };

  export type FetchRecordingTranscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Transcription resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the
     * transcription to fetch.
     */
    recordingSid: string;
    /** The Twilio-provided string that uniquely identifies the Transcription resource to fetch. */
    sid: string;
  };

  export type ListRecordingTranscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Transcription resources to read.
     */
    accountSid: string;
    /**
     * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) that created the
     * transcriptions to read.
     */
    recordingSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
