import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { apiV2010AccountCallSchema, type ApiV2010AccountCall } from "../models/api-v2010-account-call.js";
import {
  asyncAmdStatusCallbackMethodSchema,
  type AsyncAmdStatusCallbackMethod,
} from "../models/async-amd-status-callback-method.js";
import { callEnumStatusSchema, type CallEnumStatus } from "../models/call-enum-status.js";
import { callEnumUpdateStatusSchema, type CallEnumUpdateStatus } from "../models/call-enum-update-status.js";
import { fallbackMethodSchema, type FallbackMethod } from "../models/fallback-method.js";
import { listCallResponseSchema, type ListCallResponse } from "../models/list-call-response.js";
import { methodSchema, type Method } from "../models/method.js";
import { method1Schema, type Method1 } from "../models/method1.js";
import {
  recordingStatusCallbackMethodSchema,
  type RecordingStatusCallbackMethod,
} from "../models/recording-status-callback-method.js";
import {
  statusCallbackMethod8Schema,
  type StatusCallbackMethod8,
} from "../models/status-callback-method8.js";
import {
  statusCallbackMethod9Schema,
  type StatusCallbackMethod9,
} from "../models/status-callback-method9.js";
import type { Servers } from "../servers.js";

export class Api20100401Call {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCall(
    request: Api20100401Call.CreateCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCall, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCall, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "From", value: request.from, schema: s.string() },
            { name: "Method", value: request.method, schema: s.optional(s.lazy(() => methodSchema)) },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => fallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackEvent",
              value: request.statusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod8Schema)),
            },
            { name: "SendDigits", value: request.sendDigits, schema: s.optional(s.string()) },
            { name: "Timeout", value: request.timeout, schema: s.optional(s.number()) },
            { name: "Record", value: request.record, schema: s.optional(s.boolean()) },
            { name: "RecordingChannels", value: request.recordingChannels, schema: s.optional(s.string()) },
            {
              name: "RecordingStatusCallback",
              value: request.recordingStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "RecordingStatusCallbackMethod",
              value: request.recordingStatusCallbackMethod,
              schema: s.optional(s.lazy(() => recordingStatusCallbackMethodSchema)),
            },
            {
              name: "RecordingConfigurationId",
              value: request.recordingConfigurationId,
              schema: s.optional(s.string()),
            },
            { name: "SipAuthUsername", value: request.sipAuthUsername, schema: s.optional(s.string()) },
            { name: "SipAuthPassword", value: request.sipAuthPassword, schema: s.optional(s.string()) },
            { name: "MachineDetection", value: request.machineDetection, schema: s.optional(s.string()) },
            {
              name: "MachineDetectionTimeout",
              value: request.machineDetectionTimeout,
              schema: s.optional(s.number()),
            },
            {
              name: "RecordingStatusCallbackEvent",
              value: request.recordingStatusCallbackEvent,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.string()) },
            { name: "CallerId", value: request.callerId, schema: s.optional(s.string()) },
            {
              name: "MachineDetectionSpeechThreshold",
              value: request.machineDetectionSpeechThreshold,
              schema: s.optional(s.number()),
            },
            {
              name: "MachineDetectionSpeechEndThreshold",
              value: request.machineDetectionSpeechEndThreshold,
              schema: s.optional(s.number()),
            },
            {
              name: "MachineDetectionSilenceTimeout",
              value: request.machineDetectionSilenceTimeout,
              schema: s.optional(s.number()),
            },
            { name: "AsyncAmd", value: request.asyncAmd, schema: s.optional(s.string()) },
            {
              name: "AsyncAmdStatusCallback",
              value: request.asyncAmdStatusCallback,
              schema: s.optional(s.string()),
            },
            {
              name: "AsyncAmdStatusCallbackMethod",
              value: request.asyncAmdStatusCallbackMethod,
              schema: s.optional(s.lazy(() => asyncAmdStatusCallbackMethodSchema)),
            },
            { name: "Byoc", value: request.byoc, schema: s.optional(s.string()) },
            { name: "CallReason", value: request.callReason, schema: s.optional(s.string()) },
            { name: "CallToken", value: request.callToken, schema: s.optional(s.string()) },
            { name: "RecordingTrack", value: request.recordingTrack, schema: s.optional(s.string()) },
            { name: "TimeLimit", value: request.timeLimit, schema: s.optional(s.number()) },
            {
              name: "ClientNotificationUrl",
              value: request.clientNotificationUrl,
              schema: s.optional(s.string()),
            },
            { name: "Url", value: request.url, schema: s.optional(s.string()) },
            { name: "Twiml", value: request.twiml, schema: s.optional(s.string()) },
            { name: "ApplicationSid", value: request.applicationSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCall(
    request: Api20100401Call.DeleteCallRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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

  fetchCall(
    request: Api20100401Call.FetchCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCall, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCall, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCall(
    request: Api20100401Call.ListCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallResponse, ResponseError> {
    return this.#rawClient.execute<ListCallResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "To", value: request.to, schema: s.optional(s.string()) },
          { name: "From", value: request.from, schema: s.optional(s.string()) },
          { name: "ParentCallSid", value: request.parentCallSid, schema: s.optional(s.string()) },
          { name: "Status", value: request.status, schema: s.optional(s.lazy(() => callEnumStatusSchema)) },
          { name: "StartTime", value: request.startTime, schema: s.optional(s.dateTime()) },
          { name: "StartTime<", value: request.startTimeQuery, schema: s.optional(s.dateTime()) },
          { name: "StartTime>", value: request.startTimeQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "EndTime", value: request.endTime, schema: s.optional(s.dateTime()) },
          { name: "EndTime<", value: request.endTimeQuery, schema: s.optional(s.dateTime()) },
          { name: "EndTime>", value: request.endTimeQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCall(
    request: Api20100401Call.UpdateCallRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCall, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCall, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Url", value: request.url, schema: s.optional(s.string()) },
            { name: "Method", value: request.method, schema: s.optional(s.lazy(() => method1Schema)) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => callEnumUpdateStatusSchema)),
            },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => fallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod9Schema)),
            },
            { name: "Twiml", value: request.twiml, schema: s.optional(s.string()) },
            { name: "TimeLimit", value: request.timeLimit, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Call {
  export type CreateCallRequest = {
    accountSid: string;
    to: string;
    from: string;
    method?: Method;
    fallbackUrl?: string;
    fallbackMethod?: FallbackMethod;
    statusCallback?: string;
    statusCallbackEvent?: string[];
    statusCallbackMethod?: StatusCallbackMethod8;
    sendDigits?: string;
    timeout?: number;
    record?: boolean;
    recordingChannels?: string;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: RecordingStatusCallbackMethod;
    recordingConfigurationId?: string;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
    machineDetection?: string;
    machineDetectionTimeout?: number;
    recordingStatusCallbackEvent?: string[];
    trim?: string;
    callerId?: string;
    machineDetectionSpeechThreshold?: number;
    machineDetectionSpeechEndThreshold?: number;
    machineDetectionSilenceTimeout?: number;
    asyncAmd?: string;
    asyncAmdStatusCallback?: string;
    asyncAmdStatusCallbackMethod?: AsyncAmdStatusCallbackMethod;
    byoc?: string;
    callReason?: string;
    callToken?: string;
    recordingTrack?: string;
    timeLimit?: number;
    clientNotificationUrl?: string;
    url?: string;
    twiml?: string;
    applicationSid?: string;
  };

  export type DeleteCallRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchCallRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListCallRequest = {
    accountSid: string;
    to?: string;
    from?: string;
    parentCallSid?: string;
    status?: CallEnumStatus;
    startTime?: Date;
    startTimeQuery?: Date;
    startTimeQueryQuery?: Date;
    endTime?: Date;
    endTimeQuery?: Date;
    endTimeQueryQuery?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateCallRequest = {
    accountSid: string;
    sid: string;
    url?: string;
    method?: Method1;
    status?: CallEnumUpdateStatus;
    fallbackUrl?: string;
    fallbackMethod?: FallbackMethod;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod9;
    twiml?: string;
    timeLimit?: number;
  };
}
