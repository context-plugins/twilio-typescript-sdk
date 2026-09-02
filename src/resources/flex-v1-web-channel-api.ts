import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { flexV1WebChannelSchema, type FlexV1WebChannel } from "../models/flex-v1-web-channel.js";
import {
  listWebChannelResponseSchema,
  type ListWebChannelResponse,
} from "../models/list-web-channel-response.js";
import {
  webChannelEnumChatStatusSchema,
  type WebChannelEnumChatStatus,
} from "../models/web-channel-enum-chat-status.js";
import type { Servers } from "../servers.js";

export class FlexV1WebChannelApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createWebChannel(
    request: FlexV1WebChannelApi.CreateWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1WebChannel, ResponseError> {
    return this.#rawClient.execute<FlexV1WebChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/WebChannels"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FlexFlowSid", value: request.flexFlowSid, schema: s.string() },
            { name: "Identity", value: request.identity, schema: s.string() },
            { name: "CustomerFriendlyName", value: request.customerFriendlyName, schema: s.string() },
            { name: "ChatFriendlyName", value: request.chatFriendlyName, schema: s.string() },
            { name: "ChatUniqueName", value: request.chatUniqueName, schema: s.optional(s.string()) },
            { name: "PreEngagementData", value: request.preEngagementData, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1WebChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteWebChannel(
    request: FlexV1WebChannelApi.DeleteWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default13("/v1/WebChannels/{Sid}"),
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

  fetchWebChannel(
    request: FlexV1WebChannelApi.FetchWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1WebChannel, ResponseError> {
    return this.#rawClient.execute<FlexV1WebChannel, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/WebChannels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1WebChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWebChannel(
    request: FlexV1WebChannelApi.ListWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebChannelResponse, ResponseError> {
    return this.#rawClient.execute<ListWebChannelResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/WebChannels"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebChannelResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWebChannel(
    request: FlexV1WebChannelApi.UpdateWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1WebChannel, ResponseError> {
    return this.#rawClient.execute<FlexV1WebChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/WebChannels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "ChatStatus",
              value: request.chatStatus,
              schema: s.optional(s.lazy(() => webChannelEnumChatStatusSchema)),
            },
            { name: "PostEngagementData", value: request.postEngagementData, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1WebChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1WebChannelApi {
  export type CreateWebChannelRequest = {
    flexFlowSid: string;
    identity: string;
    customerFriendlyName: string;
    chatFriendlyName: string;
    chatUniqueName?: string;
    preEngagementData?: string;
  };

  export type DeleteWebChannelRequest = {
    sid: string;
  };

  export type FetchWebChannelRequest = {
    sid: string;
  };

  export type ListWebChannelRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWebChannelRequest = {
    sid: string;
    chatStatus?: WebChannelEnumChatStatus;
    postEngagementData?: string;
  };
}
