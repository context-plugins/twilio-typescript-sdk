import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  challengeEnumListOrdersSchema,
  type ChallengeEnumListOrders,
} from "../models/challenge-enum-list-orders.js";
import { confirmationSchema, type Confirmation } from "../models/confirmation.js";
import {
  conversationsV1ConversationConversationMessageSchema,
  type ConversationsV1ConversationConversationMessage,
} from "../models/conversations-v1-conversation-conversation-message.js";
import {
  conversationsV1ServiceServiceConversationServiceConversationMessageSchema,
  type ConversationsV1ServiceServiceConversationServiceConversationMessage,
} from "../models/conversations-v1-service-service-conversation-service-conversation-message.js";
import {
  listConversationMessageResponseSchema,
  type ListConversationMessageResponse,
} from "../models/list-conversation-message-response.js";
import {
  listServiceConversationMessageResponseSchema,
  type ListServiceConversationMessageResponse,
} from "../models/list-service-conversation-message-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV1Message {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a new message to the conversation
   *
   * @remarks
   * Add a new message to the conversation
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConversationMessage(
    request: ConversationsV1Message.CreateConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Author", value: request.author, schema: s.optional(s.string()) },
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "MediaSid", value: request.mediaSid, schema: s.optional(s.string()) },
            { name: "ContentSid", value: request.contentSid, schema: s.optional(s.string()) },
            { name: "ContentVariables", value: request.contentVariables, schema: s.optional(s.string()) },
            { name: "Subject", value: request.subject, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add a new message to the conversation in a specific service
   *
   * @remarks
   * Add a new message to the conversation in a specific service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceConversationMessage(
    request: ConversationsV1Message.CreateServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Author", value: request.author, schema: s.optional(s.string()) },
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "MediaSid", value: request.mediaSid, schema: s.optional(s.string()) },
            { name: "ContentSid", value: request.contentSid, schema: s.optional(s.string()) },
            { name: "ContentVariables", value: request.contentVariables, schema: s.optional(s.string()) },
            { name: "Subject", value: request.subject, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationMessageSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a message from the conversation
   *
   * @remarks
   * Remove a message from the conversation
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConversationMessage(
    request: ConversationsV1Message.DeleteConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Remove a message from the conversation
   *
   * @remarks
   * Remove a message from the conversation
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceConversationMessage(
    request: ConversationsV1Message.DeleteServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Fetch a message from the conversation
   *
   * @remarks
   * Fetch a message from the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConversationMessage(
    request: ConversationsV1Message.FetchConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a message from the conversation
   *
   * @remarks
   * Fetch a message from the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceConversationMessage(
    request: ConversationsV1Message.FetchServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationMessageSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all messages in the conversation
   *
   * @remarks
   * Retrieve a list of all messages in the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConversationMessage(
    request: ConversationsV1Message.ListConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationMessageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          {
            name: "Order",
            value: request.order,
            schema: s.optional(s.lazy(() => challengeEnumListOrdersSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationMessageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all messages in the conversation
   *
   * @remarks
   * Retrieve a list of all messages in the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceConversationMessage(
    request: ConversationsV1Message.ListServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationMessageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [
          {
            name: "Order",
            value: request.order,
            schema: s.optional(s.lazy(() => challengeEnumListOrdersSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationMessageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing message in the conversation
   *
   * @remarks
   * Update an existing message in the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConversationMessage(
    request: ConversationsV1Message.UpdateConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Author", value: request.author, schema: s.optional(s.string()) },
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "Subject", value: request.subject, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing message in the conversation
   *
   * @remarks
   * Update an existing message in the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceConversationMessage(
    request: ConversationsV1Message.UpdateServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Author", value: request.author, schema: s.optional(s.string()) },
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "Subject", value: request.subject, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationMessageSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Message {
  export type CreateConversationMessageRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The channel specific identifier of the message's author. Defaults to `system`. */
    author?: string;
    /** The content of the message, can be up to 1,600 characters long. */
    body2?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. `null` if the message has not been edited. */
    dateUpdated?: Date;
    /**
     * A string metadata field you can use to store any data you wish. The string value must contain
     * structurally valid JSON if specified. **Note** that if the attributes are not set "{}" will
     * be returned.
     */
    attributes?: string;
    /** The Media SID to be attached to the new Message. */
    mediaSid?: string;
    /**
     * The unique ID of the multi-channel [Rich Content](https://www.twilio.com/docs/content)
     * template, required for template-generated messages. **Note** that if this field is set,
     * `Body` and `MediaSid` parameters are ignored.
     */
    contentSid?: string;
    /**
     * A structurally valid JSON string that contains values to resolve Rich Content template
     * variables.
     */
    contentVariables?: string;
    /** The subject of the message, can be up to 256 characters long. */
    subject?: string;
  };

  export type CreateServiceConversationMessageRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The channel specific identifier of the message's author. Defaults to `system`. */
    author?: string;
    /** The content of the message, can be up to 1,600 characters long. */
    body2?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. `null` if the message has not been edited. */
    dateUpdated?: Date;
    /**
     * A string metadata field you can use to store any data you wish. The string value must contain
     * structurally valid JSON if specified. **Note** that if the attributes are not set "{}" will
     * be returned.
     */
    attributes?: string;
    /** The Media SID to be attached to the new Message. */
    mediaSid?: string;
    /**
     * The unique ID of the multi-channel [Rich Content](https://www.twilio.com/docs/content)
     * template, required for template-generated messages. **Note** that if this field is set,
     * `Body` and `MediaSid` parameters are ignored.
     */
    contentSid?: string;
    /**
     * A structurally valid JSON string that contains values to resolve Rich Content template
     * variables.
     */
    contentVariables?: string;
    /** The subject of the message, can be up to 256 characters long. */
    subject?: string;
  };

  export type DeleteConversationMessageRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteServiceConversationMessageRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchConversationMessageRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type FetchServiceConversationMessageRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type ListConversationMessageRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for
     * messages.
     */
    conversationSid: string;
    /**
     * The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending),
     * with `asc` as the default.
     */
    order?: ChallengeEnumListOrders;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceConversationMessageRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for
     * messages.
     */
    conversationSid: string;
    /**
     * The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending),
     * with `asc` as the default.
     */
    order?: ChallengeEnumListOrders;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConversationMessageRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The channel specific identifier of the message's author. Defaults to `system`. */
    author?: string;
    /** The content of the message, can be up to 1,600 characters long. */
    body2?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. `null` if the message has not been edited. */
    dateUpdated?: Date;
    /**
     * A string metadata field you can use to store any data you wish. The string value must contain
     * structurally valid JSON if specified. **Note** that if the attributes are not set "{}" will
     * be returned.
     */
    attributes?: string;
    /** The subject of the message, can be up to 256 characters long. */
    subject?: string;
  };

  export type UpdateServiceConversationMessageRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The channel specific identifier of the message's author. Defaults to `system`. */
    author?: string;
    /** The content of the message, can be up to 1,600 characters long. */
    body2?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. `null` if the message has not been edited. */
    dateUpdated?: Date;
    /**
     * A string metadata field you can use to store any data you wish. The string value must contain
     * structurally valid JSON if specified. **Note** that if the attributes are not set "{}" will
     * be returned.
     */
    attributes?: string;
    /** The subject of the message, can be up to 256 characters long. */
    subject?: string;
  };
}
