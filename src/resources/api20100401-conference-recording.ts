import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountConferenceConferenceRecordingSchema,
  type ApiV2010AccountConferenceConferenceRecording,
} from "../models/api-v2010-account-conference-conference-recording.js";
import {
  conferenceRecordingEnumStatusSchema,
  type ConferenceRecordingEnumStatus,
} from "../models/conference-recording-enum-status.js";
import {
  listConferenceRecordingResponseSchema,
  type ListConferenceRecordingResponse,
} from "../models/list-conference-recording-response.js";
import type { Servers } from "../servers.js";

export class Api20100401ConferenceRecording {
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
  deleteConferenceRecording(
    request: Api20100401ConferenceRecording.DeleteConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
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
   * Fetch an instance of a recording for a call
   *
   * @remarks
   * Fetch an instance of a recording for a call
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConferenceRecording(
    request: Api20100401ConferenceRecording.FetchConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceConferenceRecording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceConferenceRecordingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of recordings belonging to the call used to make the request
   *
   * @remarks
   * Retrieve a list of recordings belonging to the call used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConferenceRecording(
    request: Api20100401ConferenceRecording.ListConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceRecordingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
        ],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateOnly()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateOnly()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateOnly()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceRecordingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Changes the status of the recording to paused, stopped, or in-progress. Note: To use
   * `Twilio.CURRENT`, pass it as recording sid.
   *
   * @remarks
   * Changes the status of the recording to paused, stopped, or in-progress. Note: To use
   * `Twilio.CURRENT`, pass it as recording sid.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConferenceRecording(
    request: Api20100401ConferenceRecording.UpdateConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceConferenceRecording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: conferenceRecordingEnumStatusSchema },
            { name: "PauseBehavior", value: request.pauseBehavior, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceConferenceRecordingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401ConferenceRecording {
  export type DeleteConferenceRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference Recording resources to delete.
     */
    accountSid: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to delete.
     */
    conferenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Conference Recording resource to
     * delete.
     */
    sid: string;
  };

  export type FetchConferenceRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference Recording resource to fetch.
     */
    accountSid: string;
    /** The Conference SID that identifies the conference associated with the recording to fetch. */
    conferenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Conference Recording resource to
     * fetch.
     */
    sid: string;
  };

  export type ListConferenceRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference Recording resources to read.
     */
    accountSid: string;
    /** The Conference SID that identifies the conference associated with the recording to read. */
    conferenceSid: string;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also
     * specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before
     * midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or
     * after midnight on a date.
     */
    dateCreated?: string;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also
     * specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before
     * midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or
     * after midnight on a date.
     */
    dateCreatedQuery?: string;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. You can also
     * specify inequality: `DateCreated<=YYYY-MM-DD` will return recordings generated at or before
     * midnight on a given date, and `DateCreated>=YYYY-MM-DD` returns recordings generated at or
     * after midnight on a date.
     */
    dateCreatedQueryQuery?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConferenceRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference Recording resource to update.
     */
    accountSid: string;
    /**
     * The Conference SID that identifies the conference associated with the recording to update.
     */
    conferenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Conference Recording resource to
     * update. Use `Twilio.CURRENT` to reference the current active recording.
     */
    sid: string;
    /**
     * The status of the recording. Can be: `processing`, `completed` and `absent`. For more
     * detailed statuses on in-progress recordings, check out how to [Update a Recording
     * Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
     */
    status: ConferenceRecordingEnumStatus;
    /**
     * Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`.
     * `skip` does not record during the pause period, while `silence` will replace the actual audio
     * of the call with silence during the pause period. This parameter only applies when setting
     * `status` is set to `paused`.
     */
    pauseBehavior?: string;
  };
}
