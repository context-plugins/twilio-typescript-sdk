import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { flexV1ChannelSchema, type FlexV1Channel } from "../models/flex-v1-channel.js";
import { listChannelResponseSchema, type ListChannelResponse } from "../models/list-channel-response.js";
import type { Servers } from "../servers.js";

export class FlexV1ChannelApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createChannel(
    request: FlexV1ChannelApi.CreateChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Channel, ResponseError> {
    return this.#rawClient.execute<FlexV1Channel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Channels"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FlexFlowSid", value: request.flexFlowSid, schema: s.string() },
            { name: "Identity", value: request.identity, schema: s.string() },
            { name: "ChatUserFriendlyName", value: request.chatUserFriendlyName, schema: s.string() },
            { name: "ChatFriendlyName", value: request.chatFriendlyName, schema: s.string() },
            { name: "Target", value: request.target, schema: s.optional(s.string()) },
            { name: "ChatUniqueName", value: request.chatUniqueName, schema: s.optional(s.string()) },
            { name: "PreEngagementData", value: request.preEngagementData, schema: s.optional(s.string()) },
            { name: "TaskSid", value: request.taskSid, schema: s.optional(s.string()) },
            { name: "TaskAttributes", value: request.taskAttributes, schema: s.optional(s.string()) },
            { name: "LongLived", value: request.longLived, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1ChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteChannel(
    request: FlexV1ChannelApi.DeleteChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default13("/v1/Channels/{Sid}"),
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

  fetchChannel(
    request: FlexV1ChannelApi.FetchChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Channel, ResponseError> {
    return this.#rawClient.execute<FlexV1Channel, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1ChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listChannel(
    request: FlexV1ChannelApi.ListChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelResponse, ResponseError> {
    return this.#rawClient.execute<ListChannelResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Channels"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1ChannelApi {
  export type CreateChannelRequest = {
    flexFlowSid: string;
    identity: string;
    chatUserFriendlyName: string;
    chatFriendlyName: string;
    target?: string;
    chatUniqueName?: string;
    preEngagementData?: string;
    taskSid?: string;
    taskAttributes?: string;
    longLived?: boolean;
  };

  export type DeleteChannelRequest = {
    sid: string;
  };

  export type FetchChannelRequest = {
    sid: string;
  };

  export type ListChannelRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
