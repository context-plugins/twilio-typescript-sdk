import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  deleteConferenceRecording(
    request: Api20100401ConferenceRecording.DeleteConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
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

  fetchConferenceRecording(
    request: Api20100401ConferenceRecording.FetchConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceConferenceRecording, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConferenceConferenceRecording, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceConferenceRecordingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConferenceRecording(
    request: Api20100401ConferenceRecording.ListConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceRecordingResponse, ResponseError> {
    return this.#rawClient.execute<ListConferenceRecordingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceRecordingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConferenceRecording(
    request: Api20100401ConferenceRecording.UpdateConferenceRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConferenceConferenceRecording, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConferenceConferenceRecording, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401ConferenceRecording {
  export type DeleteConferenceRecordingRequest = {
    accountSid: string;
    conferenceSid: string;
    sid: string;
  };

  export type FetchConferenceRecordingRequest = {
    accountSid: string;
    conferenceSid: string;
    sid: string;
  };

  export type ListConferenceRecordingRequest = {
    accountSid: string;
    conferenceSid: string;
    dateCreated?: string;
    dateCreatedQuery?: string;
    dateCreatedQueryQuery?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConferenceRecordingRequest = {
    accountSid: string;
    conferenceSid: string;
    sid: string;
    status: ConferenceRecordingEnumStatus;
    pauseBehavior?: string;
  };
}
