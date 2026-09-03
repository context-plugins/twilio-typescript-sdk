import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  conversationsV1ServiceServiceBindingSchema,
  type ConversationsV1ServiceServiceBinding,
} from "../models/conversations-v1-service-service-binding.js";
import {
  listServiceBindingResponseSchema,
  type ListServiceBindingResponse,
} from "../models/list-service-binding-response.js";
import {
  serviceBindingEnumBindingTypeSchema,
  type ServiceBindingEnumBindingType,
} from "../models/service-binding-enum-binding-type.js";
import type { Servers } from "../servers.js";

export class ConversationsV1Binding {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteServiceBinding(
    request: ConversationsV1Binding.DeleteServiceBindingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Bindings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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

  fetchServiceBinding(
    request: ConversationsV1Binding.FetchServiceBindingRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceBinding, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceBinding, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Bindings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceBindingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceBinding(
    request: ConversationsV1Binding.ListServiceBindingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceBindingResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceBindingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Bindings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          {
            name: "BindingType",
            value: request.bindingType,
            schema: s.optional(s.array(s.lazy(() => serviceBindingEnumBindingTypeSchema))),
          },
          { name: "Identity", value: request.identity, schema: s.optional(s.array(s.string())) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceBindingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Binding {
  export type DeleteServiceBindingRequest = {
    chatServiceSid: string;
    sid: string;
  };

  export type FetchServiceBindingRequest = {
    chatServiceSid: string;
    sid: string;
  };

  export type ListServiceBindingRequest = {
    chatServiceSid: string;
    bindingType?: ServiceBindingEnumBindingType[];
    identity?: string[];
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
