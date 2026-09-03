import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  createCallRecording(
    request: Api20100401CallRecording.CreateCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallRecording, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallCallRecording, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCallRecording(
    request: Api20100401CallRecording.DeleteCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchCallRecording(
    request: Api20100401CallRecording.FetchCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallRecording, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallCallRecording, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallCallRecordingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCallRecording(
    request: Api20100401CallRecording.ListCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallRecordingResponse, ResponseError> {
    return this.#rawClient.execute<ListCallRecordingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateOnly()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateOnly()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateOnly()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallRecordingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCallRecording(
    request: Api20100401CallRecording.UpdateCallRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallCallRecording, Api20100401CallRecording.UpdateCallRecordingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
    accountSid: string;
    callSid: string;
    recordingStatusCallbackEvent?: string[];
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: RecordingStatusCallbackMethod1;
    trim?: string;
    recordingChannels?: string;
    recordingTrack?: string;
    recordingConfigurationId?: string;
  };

  export type DeleteCallRecordingRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
  };

  export type FetchCallRecordingRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
  };

  export type ListCallRecordingRequest = {
    accountSid: string;
    callSid: string;
    dateCreated?: string;
    dateCreatedQuery?: string;
    dateCreatedQueryQuery?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateCallRecordingRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
    status: CallRecordingEnumStatus;
    pauseBehavior?: string;
  };

  export class UpdateCallRecordingError extends ResponseError<
    Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
  > {
    static readonly errors: ErrorDecoders<UpdateCallRecordingError> = [
      {
        on: 408,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
