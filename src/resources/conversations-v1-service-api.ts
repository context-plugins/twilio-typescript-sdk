import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  conversationsV1ServiceSchema,
  type ConversationsV1Service,
} from "../models/conversations-v1-service.js";
import { listServiceResponse2Schema, type ListServiceResponse2 } from "../models/list-service-response2.js";
import type { Servers } from "../servers.js";

export class ConversationsV1ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createService3(
    request: ConversationsV1ServiceApi.CreateService3Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Service, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteService3(
    request: ConversationsV1ServiceApi.DeleteService3Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchService3(
    request: ConversationsV1ServiceApi.FetchService3Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Service, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Service, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listService3(
    request: ConversationsV1ServiceApi.ListService3Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse2, ResponseError> {
    return this.#rawClient.execute<ListServiceResponse2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponse2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ServiceApi {
  export type CreateService3Request = {
    friendlyName: string;
  };

  export type DeleteService3Request = {
    sid: string;
  };

  export type FetchService3Request = {
    sid: string;
  };

  export type ListService3Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
