import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listChannelSenderResponseSchema,
  type ListChannelSenderResponse,
} from "../models/list-channel-sender-response.js";
import {
  messagingV1ServiceChannelSenderSchema,
  type MessagingV1ServiceChannelSender,
} from "../models/messaging-v1-service-channel-sender.js";
import type { Servers } from "../servers.js";

export class MessagingV1ChannelSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createChannelSender(
    request: MessagingV1ChannelSender.CreateChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceChannelSender, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceChannelSender, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        body: { kind: "formUrlEncoded", value: [{ name: "Sid", value: request.sid, schema: s.string() }] },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceChannelSenderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteChannelSender(
    request: MessagingV1ChannelSender.DeleteChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
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

  fetchChannelSender(
    request: MessagingV1ChannelSender.FetchChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceChannelSender, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceChannelSender, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceChannelSenderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listChannelSender(
    request: MessagingV1ChannelSender.ListChannelSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelSenderResponse, ResponseError> {
    return this.#rawClient.execute<ListChannelSenderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/ChannelSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1ChannelSender {
  export type CreateChannelSenderRequest = {
    messagingServiceSid: string;
    sid: string;
  };

  export type DeleteChannelSenderRequest = {
    messagingServiceSid: string;
    sid: string;
  };

  export type FetchChannelSenderRequest = {
    messagingServiceSid: string;
    sid: string;
  };

  export type ListChannelSenderRequest = {
    messagingServiceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
