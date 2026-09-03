import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountRecordingRecordingAddOnResultSchema,
  type ApiV2010AccountRecordingRecordingAddOnResult,
} from "../models/api-v2010-account-recording-recording-add-on-result.js";
import {
  listRecordingAddOnResultResponseSchema,
  type ListRecordingAddOnResultResponse,
} from "../models/list-recording-add-on-result-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AddOnResult {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteRecordingAddOnResult(
    request: Api20100401AddOnResult.DeleteRecordingAddOnResultRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
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

  fetchRecordingAddOnResult(
    request: Api20100401AddOnResult.FetchRecordingAddOnResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecordingRecordingAddOnResult, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountRecordingRecordingAddOnResult, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountRecordingRecordingAddOnResultSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRecordingAddOnResult(
    request: Api20100401AddOnResult.ListRecordingAddOnResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingAddOnResultResponse, ResponseError> {
    return this.#rawClient.execute<ListRecordingAddOnResultResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingAddOnResultResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401AddOnResult {
  export type DeleteRecordingAddOnResultRequest = {
    accountSid: string;
    referenceSid: string;
    sid: string;
  };

  export type FetchRecordingAddOnResultRequest = {
    accountSid: string;
    referenceSid: string;
    sid: string;
  };

  export type ListRecordingAddOnResultRequest = {
    accountSid: string;
    referenceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
