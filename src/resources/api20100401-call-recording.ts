import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  apiV2010AccountCallCallRecordingSchema,
  type ApiV2010AccountCallCallRecording,
} from "../models/api-v2010-account-call-call-recording.js";
import {
  callRecordingEnumStatusSchema,
  type CallRecordingEnumStatus,
} from "../models/call-recording-enum-status.js";
import {
  listCallRecordingResponseSchema,
  type ListCallRecordingResponse,
} from "../models/list-call-recording-response.js";
import {
  recordingStatusCallbackMethod1Schema,
  type RecordingStatusCallbackMethod1,
} from "../models/recording-status-callback-method1.js";
import type { Servers } from "../servers.js";

export class Api20100401CallRecording {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a recording for the call
   *
   * @remarks
   * Create a recording for the call
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCallRecording(
    request: Api20100401CallRecording.CreateCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallRecording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "RecordingStatusCallbackEvent",
              value: request.recordingStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "RecordingStatusCallback",
              value: request.recordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "RecordingStatusCallbackMethod",
              value: request.recordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => recordingStatusCallbackMethod1Schema)),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.string()) },
            { name: "RecordingChannels", value: request.recordingChannels, schema: s.optional(s.string()) },
            { name: "RecordingTrack", value: request.recordingTrack, schema: s.optional(s.string()) },
            {
              name: "RecordingConfigurationId",
              value: request.recordingConfigurationId,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallCallRecordingSchema },
        errorFactory: ApiError,
      },
      options,
    );
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
  deleteCallRecording(
    request: Api20100401CallRecording.DeleteCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
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
  fetchCallRecording(
    request: Api20100401CallRecording.FetchCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallRecording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallCallRecordingSchema },
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
  listCallRecording(
    request: Api20100401CallRecording.ListCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallRecordingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
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
        success: { kind: "json", schema: listCallRecordingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Changes the status of the recording to paused, stopped, or in-progress. Note: Pass
   * `Twilio.CURRENT` instead of recording sid to reference current active recording.
   *
   * @remarks
   * Changes the status of the recording to paused, stopped, or in-progress. Note: Pass
   * `Twilio.CURRENT` instead of recording sid to reference current active recording.
   *
   * @returns OK
   *
   * @throws {@link Api20100401CallRecording.UpdateCallRecordingError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCallRecording(
    request: Api20100401CallRecording.UpdateCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallRecording, Api20100401CallRecording.UpdateCallRecordingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: callRecordingEnumStatusSchema },
            { name: "PauseBehavior", value: request.pauseBehavior, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallCallRecordingSchema },
        errorFactory: Api20100401CallRecording.UpdateCallRecordingError,
      },
      options,
    );
  }
}

export namespace Api20100401CallRecording {
  export type CreateCallRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) to associate the
     * resource with.
     */
    callSid: string;
    /**
     * The recording status events on which we should call the `recording_status_callback` URL. Can
     * be: `in-progress`, `completed` and `absent` and the default is `completed`. Separate multiple
     * event values with a space.
     */
    recordingStatusCallbackEvent?: string[];
    /**
     * The URL we should call using the `recording_status_callback_method` on each recording event
     * specified in `recording_status_callback_event`. For more information, see
     * [RecordingStatusCallback
     * parameters](https://www.twilio.com/docs/voice/api/recording#recordingstatuscallback).
     */
    recordingStatusCallback?: string;
    /**
     * The HTTP method we should use to call `recording_status_callback`. Can be: `GET` or `POST`
     * and the default is `POST`.
     */
    recordingStatusCallbackMethod?: RecordingStatusCallbackMethod1;
    /**
     * Whether to trim any leading and trailing silence in the recording. Can be: `trim-silence` or
     * `do-not-trim` and the default is `do-not-trim`. `trim-silence` trims the silence from the
     * beginning and end of the recording and `do-not-trim` does not.
     */
    trim?: string;
    /**
     * The number of channels used in the recording. Can be: `mono` or `dual` and the default is
     * `mono`. `mono` records all parties of the call into one channel. `dual` records each party of
     * a 2-party call into separate channels.
     */
    recordingChannels?: string;
    /**
     * The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default
     * is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the
     * audio that is generated from Twilio. `both` records the audio that is received and generated
     * by Twilio.
     */
    recordingTrack?: string;
    /** The identifier of the configuration to be used when creating and processing the recording */
    recordingConfigurationId?: string;
  };

  export type DeleteCallRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resources to delete.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to
     * delete.
     */
    callSid: string;
    /** The Twilio-provided string that uniquely identifies the Recording resource to delete. */
    sid: string;
  };

  export type FetchCallRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resource to fetch.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource to fetch.
     */
    callSid: string;
    /** The Twilio-provided string that uniquely identifies the Recording resource to fetch. */
    sid: string;
  };

  export type ListCallRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resources to read.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resources to read.
     */
    callSid: string;
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

  export type UpdateCallRecordingRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording resource to update.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the resource to
     * update.
     */
    callSid: string;
    /** The Twilio-provided string that uniquely identifies the Recording resource to update. */
    sid: string;
    /**
     * The status of the recording. Can be: `processing`, `completed` and `absent`. For more
     * detailed statuses on in-progress recordings, check out how to [Update a Recording
     * Resource](https://www.twilio.com/docs/voice/api/recording#update-a-recording-resource).
     */
    status: CallRecordingEnumStatus;
    /**
     * Whether to record during a pause. Can be: `skip` or `silence` and the default is `silence`.
     * `skip` does not record during the pause period, while `silence` will replace the actual audio
     * of the call with silence during the pause period. This parameter only applies when setting
     * `status` is set to `paused`.
     */
    pauseBehavior?: string;
  };

  export class UpdateCallRecordingError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    >;

    static readonly errors: ErrorDecoders<UpdateCallRecordingError> = [
      {
        on: 408,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
