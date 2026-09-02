import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema,
  type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload,
} from "../models/api-v2010-account-recording-recording-add-on-result-recording-add-on-result-payload.js";
import {
  listRecordingAddOnResultPayloadResponseSchema,
  type ListRecordingAddOnResultPayloadResponse,
} from "../models/list-recording-add-on-result-payload-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Payload {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteRecordingAddOnResultPayload(
    request: Api20100401Payload.DeleteRecordingAddOnResultPayloadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
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

  fetchRecordingAddOnResultPayload(
    request: Api20100401Payload.FetchRecordingAddOnResultPayloadRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRecordingAddOnResultPayload(
    request: Api20100401Payload.ListRecordingAddOnResultPayloadRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingAddOnResultPayloadResponse, ResponseError> {
    return this.#rawClient.execute<ListRecordingAddOnResultPayloadResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingAddOnResultPayloadResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Payload {
  export type DeleteRecordingAddOnResultPayloadRequest = {
    accountSid: string;
    referenceSid: string;
    addOnResultSid: string;
    sid: string;
  };

  export type FetchRecordingAddOnResultPayloadRequest = {
    accountSid: string;
    referenceSid: string;
    addOnResultSid: string;
    sid: string;
  };

  export type ListRecordingAddOnResultPayloadRequest = {
    accountSid: string;
    referenceSid: string;
    addOnResultSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
