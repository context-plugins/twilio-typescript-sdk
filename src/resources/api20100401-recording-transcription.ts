import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountRecordingRecordingTranscriptionSchema,
  type ApiV2010AccountRecordingRecordingTranscription,
} from "../models/api-v2010-account-recording-recording-transcription.js";
import {
  listRecordingTranscriptionResponseSchema,
  type ListRecordingTranscriptionResponse,
} from "../models/list-recording-transcription-response.js";
import type { Servers } from "../servers.js";

export class Api20100401RecordingTranscription {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteRecordingTranscription(
    request: Api20100401RecordingTranscription.DeleteRecordingTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "RecordingSid", value: request.recordingSid, schema: s.string() },
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

  fetchRecordingTranscription(
    request: Api20100401RecordingTranscription.FetchRecordingTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecordingRecordingTranscription, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountRecordingRecordingTranscription, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "RecordingSid", value: request.recordingSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountRecordingRecordingTranscriptionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRecordingTranscription(
    request: Api20100401RecordingTranscription.ListRecordingTranscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingTranscriptionResponse, ResponseError> {
    return this.#rawClient.execute<ListRecordingTranscriptionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "RecordingSid", value: request.recordingSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingTranscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401RecordingTranscription {
  export type DeleteRecordingTranscriptionRequest = {
    accountSid: string;
    recordingSid: string;
    sid: string;
  };

  export type FetchRecordingTranscriptionRequest = {
    accountSid: string;
    recordingSid: string;
    sid: string;
  };

  export type ListRecordingTranscriptionRequest = {
    accountSid: string;
    recordingSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
