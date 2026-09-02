import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountTranscriptionSchema,
  type ApiV2010AccountTranscription,
} from "../models/api-v2010-account-transcription.js";
import {
  listTranscriptionResponseSchema,
  type ListTranscriptionResponse,
} from "../models/list-transcription-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Transcription {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteTranscription(
    request: Api20100401Transcription.DeleteTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json"),
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

  fetchTranscription(
    request: Api20100401Transcription.FetchTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountTranscription, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountTranscription, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountTranscriptionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTranscription(
    request: Api20100401Transcription.ListTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTranscriptionResponse, ResponseError> {
    return this.#rawClient.execute<ListTranscriptionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Transcriptions.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTranscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Transcription {
  export type DeleteTranscriptionRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchTranscriptionRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListTranscriptionRequest = {
    accountSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
