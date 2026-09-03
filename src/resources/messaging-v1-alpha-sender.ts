import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listAlphaSenderResponseSchema,
  type ListAlphaSenderResponse,
} from "../models/list-alpha-sender-response.js";
import {
  messagingV1ServiceAlphaSenderSchema,
  type MessagingV1ServiceAlphaSender,
} from "../models/messaging-v1-service-alpha-sender.js";
import type { Servers } from "../servers.js";

export class MessagingV1AlphaSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAlphaSender(
    request: MessagingV1AlphaSender.CreateAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceAlphaSender, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceAlphaSender, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/AlphaSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "AlphaSender", value: request.alphaSender, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceAlphaSenderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteAlphaSender(
    request: MessagingV1AlphaSender.DeleteAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/AlphaSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
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

  fetchAlphaSender(
    request: MessagingV1AlphaSender.FetchAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceAlphaSender, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceAlphaSender, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/AlphaSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceAlphaSenderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listAlphaSender(
    request: MessagingV1AlphaSender.ListAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAlphaSenderResponse, ResponseError> {
    return this.#rawClient.execute<ListAlphaSenderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/AlphaSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAlphaSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1AlphaSender {
  export type CreateAlphaSenderRequest = {
    serviceSid: string;
    alphaSender: string;
  };

  export type DeleteAlphaSenderRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchAlphaSenderRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListAlphaSenderRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
