import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listChannelsSenderResponseSchema,
  type ListChannelsSenderResponse,
} from "../models/list-channels-sender-response.js";
import {
  messagingV2ChannelsSenderRequestsCreateSchema,
  type MessagingV2ChannelsSenderRequestsCreate,
} from "../models/messaging-v2-channels-sender-requests-create.js";
import {
  messagingV2ChannelsSenderRequestsUpdateSchema,
  type MessagingV2ChannelsSenderRequestsUpdate,
} from "../models/messaging-v2-channels-sender-requests-update.js";
import {
  messagingV2ChannelsSenderResponseSchema,
  type MessagingV2ChannelsSenderResponse,
} from "../models/messaging-v2-channels-sender-response.js";
import type { Servers } from "../servers.js";

export class MessagingV2ChannelsSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createChannelsSender(
    request: MessagingV2ChannelsSender.CreateChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2ChannelsSenderResponse, ResponseError> {
    return this.#rawClient.execute<MessagingV2ChannelsSenderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v2/Channels/Senders"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: messagingV2ChannelsSenderRequestsCreateSchema },
      },
      {
        success: { kind: "json", schema: messagingV2ChannelsSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteChannelsSender(
    request: MessagingV2ChannelsSender.DeleteChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v2/Channels/Senders/{Sid}"),
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

  fetchChannelsSender(
    request: MessagingV2ChannelsSender.FetchChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2ChannelsSenderResponse, ResponseError> {
    return this.#rawClient.execute<MessagingV2ChannelsSenderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v2/Channels/Senders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV2ChannelsSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listChannelsSender(
    request: MessagingV2ChannelsSender.ListChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelsSenderResponse, ResponseError> {
    return this.#rawClient.execute<ListChannelsSenderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v2/Channels/Senders"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Channel", value: request.channel, schema: s.string() },
          { name: "PageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChannelsSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateChannelsSender(
    request: MessagingV2ChannelsSender.UpdateChannelsSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV2ChannelsSenderResponse, ResponseError> {
    return this.#rawClient.execute<MessagingV2ChannelsSenderResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v2/Channels/Senders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => messagingV2ChannelsSenderRequestsUpdateSchema)),
        },
      },
      {
        success: { kind: "json", schema: messagingV2ChannelsSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV2ChannelsSender {
  export type CreateChannelsSenderRequest = {
    body: MessagingV2ChannelsSenderRequestsCreate;
  };

  export type DeleteChannelsSenderRequest = {
    sid: string;
  };

  export type FetchChannelsSenderRequest = {
    sid: string;
  };

  export type ListChannelsSenderRequest = {
    channel: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateChannelsSenderRequest = {
    sid: string;
    body?: MessagingV2ChannelsSenderRequestsUpdate;
  };
}
