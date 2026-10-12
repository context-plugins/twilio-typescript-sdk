import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a specific User Conversation.
   *
   * @remarks
   * Delete a specific User Conversation.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceUserConversation(
    request: ConversationsV1UserConversation.DeleteServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
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
   * Delete a specific User Conversation.
   *
   * @remarks
   * Delete a specific User Conversation.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUserConversation(
    request: ConversationsV1UserConversation.DeleteUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Users/{UserSid}/Conversations/{ConversationSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
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
   * Fetch a specific User Conversation.
   *
   * @remarks
   * Fetch a specific User Conversation.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceUserConversation(
    request: ConversationsV1UserConversation.FetchServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUserServiceUserConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserServiceUserConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific User Conversation.
   *
   * @remarks
   * Fetch a specific User Conversation.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchUserConversation(
    request: ConversationsV1UserConversation.FetchUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1UserUserConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Users/{UserSid}/Conversations/{ConversationSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1UserUserConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all User Conversations for the User.
   *
   * @remarks
   * Retrieve a list of all User Conversations for the User.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceUserConversation(
    request: ConversationsV1UserConversation.ListServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceUserConversationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceUserConversationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all User Conversations for the User.
   *
   * @remarks
   * Retrieve a list of all User Conversations for the User.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUserConversation(
    request: ConversationsV1UserConversation.ListUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUserConversationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Users/{UserSid}/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "UserSid", value: request.userSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUserConversationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific User Conversation.
   *
   * @remarks
   * Update a specific User Conversation.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceUserConversation(
    request: ConversationsV1UserConversation.UpdateServiceUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUserServiceUserConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optionalNullable(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserServiceUserConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific User Conversation.
   *
   * @remarks
   * Update a specific User Conversation.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUserConversation(
    request: ConversationsV1UserConversation.UpdateUserConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1UserUserConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Users/{UserSid}/Conversations/{ConversationSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "UserSid", value: request.userSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optionalNullable(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1UserUserConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1UserConversation {
  export type DeleteServiceUserConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the
     * `unique_name` of the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
  };

  export type DeleteUserConversationRequest = {
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the
     * `unique_name` of the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
  };

  export type FetchServiceUserConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the
     * `unique_name` of the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
  };

  export type FetchUserConversationRequest = {
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the
     * `unique_name` of the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
  };

  export type ListServiceUserConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListUserConversationRequest = {
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateServiceUserConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the
     * `unique_name` of the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
    /** The Notification Level of this User Conversation. One of `default` or `muted`. */
    notificationLevel?: ServiceUserConversationEnumNotificationLevel;
    /** The date of the last message read in conversation by the user, given in ISO 8601 format. */
    lastReadTimestamp?: Date;
    /** The index of the last Message in the Conversation that the Participant has read. */
    lastReadMessageIndex?: number | null;
  };

  export type UpdateUserConversationRequest = {
    /**
     * The unique SID identifier of the [User
     * resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be
     * either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the
     * `unique_name` of the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
    /** The Notification Level of this User Conversation. One of `default` or `muted`. */
    notificationLevel?: UserConversationEnumNotificationLevel;
    /** The date of the last message read in conversation by the user, given in ISO 8601 format. */
    lastReadTimestamp?: Date;
    /** The index of the last Message in the Conversation that the Participant has read. */
    lastReadMessageIndex?: number | null;
  };
}
