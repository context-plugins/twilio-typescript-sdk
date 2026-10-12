import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Flex chat channels
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChannel(
    request: FlexV1ChannelApi.CreateChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Channel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Channels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Flex chat channels
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannel(
    request: FlexV1ChannelApi.DeleteChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/v1/Channels/{Sid}"),
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

  /**
   * Flex chat channels
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchChannel(
    request: FlexV1ChannelApi.FetchChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Channel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1ChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Flex chat channels
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listChannel(
    request: FlexV1ChannelApi.ListChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Channels"),
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
        success: { kind: "json", schema: listChannelResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1ChannelApi {
  export type CreateChannelRequest = {
    /** The SID of the Flex Flow. */
    flexFlowSid: string;
    /** The `identity` value that uniquely identifies the new resource's chat User. */
    identity: string;
    /** The chat participant's friendly name. */
    chatUserFriendlyName: string;
    /** The chat channel's friendly name. */
    chatFriendlyName: string;
    /** The Target Contact Identity, for example the phone number of an SMS. */
    target?: string;
    /** The chat channel's unique name. */
    chatUniqueName?: string;
    /** The pre-engagement data. */
    preEngagementData?: string;
    /**
     * The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for
     * integration types `studio` & `external`
     */
    taskSid?: string;
    /** The Task attributes to be added for the TaskRouter Task. */
    taskAttributes?: string;
    /** Whether to create the channel as long-lived. */
    longLived?: boolean;
  };

  export type DeleteChannelRequest = {
    /** The SID of the Flex chat channel resource to delete. */
    sid: string;
  };

  export type FetchChannelRequest = {
    /** The SID of the Flex chat channel resource to fetch. */
    sid: string;
  };

  export type ListChannelRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
