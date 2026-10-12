import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountRecordingSchema,
  type ApiV2010AccountRecording,
} from "../models/api-v2010-account-recording.js";
import {
  listRecordingResponseSchema,
  type ListRecordingResponse,
} from "../models/list-recording-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Recording {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a recording from your account
   *
   * @remarks
   * Delete a recording from your account
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecording(
    request: Api20100401Recording.DeleteRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Fetch an instance of a recording
   *
   * @remarks
   * Fetch an instance of a recording
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecording(
    request: Api20100401Recording.FetchRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [
          { name: "IncludeSoftDeleted", value: request.includeSoftDeleted, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountRecordingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of recordings belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of recordings belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecording(
    request: Api20100401Recording.ListRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Recordings.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateTime()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "CallSid", value: request.callSid, schema: s.optional(s.string()) },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.optional(s.string()) },
          { name: "IncludeSoftDeleted", value: request.includeSoftDeleted, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Recording {
  export type DeleteRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resources to delete.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Recording resource to delete. */
    sid: string;
  };

  export type FetchRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Recording resource to fetch. */
    sid: string;
    /**
     * A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings
     * metadata are kept after deletion for a retention period of 40 days.
     */
    includeSoftDeleted?: boolean;
  };

  export type ListRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resources to read.
     */
    accountSid: string;
    /**
     * Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in
     * GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can
     * also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were
     * created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings
     * that were created on or after midnight of this date.
     */
    dateCreated?: Date;
    /**
     * Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in
     * GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can
     * also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were
     * created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings
     * that were created on or after midnight of this date.
     */
    dateCreatedQuery?: Date;
    /**
     * Only include recordings that were created on this date. Specify a date as `YYYY-MM-DD` in
     * GMT, for example: `2009-07-06`, to read recordings that were created on this date. You can
     * also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read recordings that were
     * created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read recordings
     * that were created on or after midnight of this date.
     */
    dateCreatedQueryQuery?: Date;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
     */
    callSid?: string;
    /** The Conference SID that identifies the conference associated with the recording to read. */
    conferenceSid?: string;
    /**
     * A boolean parameter indicating whether to retrieve soft deleted recordings or not. Recordings
     * metadata are kept after deletion for a retention period of 40 days.
     */
    includeSoftDeleted?: boolean;
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
