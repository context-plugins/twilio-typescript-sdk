import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<FlexV1WebChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/WebChannels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteWebChannel(
    request: FlexV1WebChannelApi.DeleteWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/v1/WebChannels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchWebChannel(
    request: FlexV1WebChannelApi.FetchWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1WebChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/WebChannels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1WebChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listWebChannel(
    request: FlexV1WebChannelApi.ListWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebChannelResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/WebChannels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebChannelResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateWebChannel(
    request: FlexV1WebChannelApi.UpdateWebChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1WebChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/WebChannels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1WebChannelApi {
  export type CreateWebChannelRequest = {
    /** The SID of the Flex Flow. */
    flexFlowSid: string;
    /** The chat identity. */
    identity: string;
    /** The chat participant's friendly name. */
    customerFriendlyName: string;
    /** The chat channel's friendly name. */
    chatFriendlyName: string;
    /** The chat channel's unique name. */
    chatUniqueName?: string;
    /** The pre-engagement data. */
    preEngagementData?: string;
  };

  export type DeleteWebChannelRequest = {
    /** The SID of the WebChannel resource to delete. */
    sid: string;
  };

  export type FetchWebChannelRequest = {
    /** The SID of the WebChannel resource to fetch. */
    sid: string;
  };

  export type ListWebChannelRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateWebChannelRequest = {
    /** The SID of the WebChannel resource to update. */
    sid: string;
    chatStatus?: WebChannelEnumChatStatus;
    /** The post-engagement data. */
    postEngagementData?: string;
  };
}
