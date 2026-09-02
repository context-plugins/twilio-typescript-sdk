import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  deleteRecording(
    request: Api20100401Recording.DeleteRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json"),
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

  fetchRecording(
    request: Api20100401Recording.FetchRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecording, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountRecording, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [
          { name: "IncludeSoftDeleted", value: request.includeSoftDeleted, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountRecordingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRecording(
    request: Api20100401Recording.ListRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingResponse, ResponseError> {
    return this.#rawClient.execute<ListRecordingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Recordings.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateTime()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "CallSid", value: request.callSid, schema: s.optional(s.string()) },
          { name: "ConferenceSid", value: request.conferenceSid, schema: s.optional(s.string()) },
          { name: "IncludeSoftDeleted", value: request.includeSoftDeleted, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Recording {
  export type DeleteRecordingRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchRecordingRequest = {
    accountSid: string;
    sid: string;
    includeSoftDeleted?: boolean;
  };

  export type ListRecordingRequest = {
    accountSid: string;
    dateCreated?: Date;
    dateCreatedQuery?: Date;
    dateCreatedQueryQuery?: Date;
    callSid?: string;
    conferenceSid?: string;
    includeSoftDeleted?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
