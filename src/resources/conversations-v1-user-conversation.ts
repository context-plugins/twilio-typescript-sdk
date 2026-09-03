import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  conversationsV1ServiceServiceUserServiceUserConversationSchema,
  type ConversationsV1ServiceServiceUserServiceUserConversation,
} from "../models/conversations-v1-service-service-user-service-user-conversation.js";
import {
  conversationsV1UserUserConversationSchema,
  type ConversationsV1UserUserConversation,
} from "../models/conversations-v1-user-user-conversation.js";
import {
  listServiceUserConversationResponseSchema,
  type ListServiceUserConversationResponse,
} from "../models/list-service-user-conversation-response.js";
import {
  listUserConversationResponseSchema,
  type ListUserConversationResponse,
} from "../models/list-user-conversation-response.js";
import {
  serviceUserConversationEnumNotificationLevelSchema,
  type ServiceUserConversationEnumNotificationLevel,
} from "../models/service-user-conversation-enum-notification-level.js";
import {
  userConversationEnumNotificationLevelSchema,
  type UserConversationEnumNotificationLevel,
} from "../models/user-conversation-enum-notification-level.js";
import type { Servers } from "../servers.js";

export class ConversationsV1UserConversation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteServiceUserConversation(
    request: ConversationsV1UserConversation.DeleteServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
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

  deleteUserConversation(
    request: ConversationsV1UserConversation.DeleteUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Users/{UserSid}/Conversations/{ConversationSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
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

  fetchServiceUserConversation(
    request: ConversationsV1UserConversation.FetchServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUserServiceUserConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceUserServiceUserConversation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserServiceUserConversationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchUserConversation(
    request: ConversationsV1UserConversation.FetchUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1UserUserConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1UserUserConversation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Users/{UserSid}/Conversations/{ConversationSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1UserUserConversationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceUserConversation(
    request: ConversationsV1UserConversation.ListServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceUserConversationResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceUserConversationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceUserConversationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUserConversation(
    request: ConversationsV1UserConversation.ListUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUserConversationResponse, ResponseError> {
    return this.#rawClient.execute<ListUserConversationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Users/{UserSid}/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "UserSid", value: request.userSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUserConversationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceUserConversation(
    request: ConversationsV1UserConversation.UpdateServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUserServiceUserConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceUserServiceUserConversation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "NotificationLevel",
              value: request.notificationLevel,
              schema: s.optional(s.lazy(() => serviceUserConversationEnumNotificationLevelSchema)),
            },
            { name: "LastReadTimestamp", value: request.lastReadTimestamp, schema: s.optional(s.dateTime()) },
            {
              name: "LastReadMessageIndex",
              value: request.lastReadMessageIndex,
              schema: s.optionalNullable(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserServiceUserConversationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateUserConversation(
    request: ConversationsV1UserConversation.UpdateUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1UserUserConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1UserUserConversation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Users/{UserSid}/Conversations/{ConversationSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "NotificationLevel",
              value: request.notificationLevel,
              schema: s.optional(s.lazy(() => userConversationEnumNotificationLevelSchema)),
            },
            { name: "LastReadTimestamp", value: request.lastReadTimestamp, schema: s.optional(s.dateTime()) },
            {
              name: "LastReadMessageIndex",
              value: request.lastReadMessageIndex,
              schema: s.optionalNullable(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1UserUserConversationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1UserConversation {
  export type DeleteServiceUserConversationRequest = {
    chatServiceSid: string;
    userSid: string;
    conversationSid: string;
  };

  export type DeleteUserConversationRequest = {
    userSid: string;
    conversationSid: string;
  };

  export type FetchServiceUserConversationRequest = {
    chatServiceSid: string;
    userSid: string;
    conversationSid: string;
  };

  export type FetchUserConversationRequest = {
    userSid: string;
    conversationSid: string;
  };

  export type ListServiceUserConversationRequest = {
    chatServiceSid: string;
    userSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListUserConversationRequest = {
    userSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateServiceUserConversationRequest = {
    chatServiceSid: string;
    userSid: string;
    conversationSid: string;
    notificationLevel?: ServiceUserConversationEnumNotificationLevel;
    lastReadTimestamp?: Date;
    lastReadMessageIndex?: number | null;
  };

  export type UpdateUserConversationRequest = {
    userSid: string;
    conversationSid: string;
    notificationLevel?: UserConversationEnumNotificationLevel;
    lastReadTimestamp?: Date;
    lastReadMessageIndex?: number | null;
  };
}
