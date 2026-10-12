import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { confirmationSchema, type Confirmation } from "../models/confirmation.js";
import {
  conversationEnumStateSchema,
  type ConversationEnumState,
} from "../models/conversation-enum-state.js";
import {
  conversationsV1ConversationSchema,
  type ConversationsV1Conversation,
} from "../models/conversations-v1-conversation.js";
import {
  conversationsV1ServiceServiceConversationSchema,
  type ConversationsV1ServiceServiceConversation,
} from "../models/conversations-v1-service-service-conversation.js";
import {
  listConversationResponseSchema,
  type ListConversationResponse,
} from "../models/list-conversation-response.js";
import {
  listServiceConversationResponseSchema,
  type ListServiceConversationResponse,
} from "../models/list-service-conversation-response.js";
import {
  serviceConversationEnumStateSchema,
  type ServiceConversationEnumState,
} from "../models/service-conversation-enum-state.js";
import type { Servers } from "../servers.js";

export class ConversationsV1ConversationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new conversation in your account's default service
   *
   * @remarks
   * Create a new conversation in your account's default service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConversation(
    request: ConversationsV1ConversationApi.CreateConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Conversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
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
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            {
              name: "MessagingServiceSid",
              value: request.messagingServiceSid,
              schema: s.optional(s.string()),
            },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "State",
              value: request.state,
              schema: s.optional(s.lazy(() => conversationEnumStateSchema)),
            },
            { name: "Timers.Inactive", value: request.timersInactive, schema: s.optional(s.string()) },
            { name: "Timers.Closed", value: request.timersClosed, schema: s.optional(s.string()) },
            {
              name: "Bindings.Email.Address",
              value: request.bindingsEmailAddress,
              schema: s.optional(s.string()),
            },
            { name: "Bindings.Email.Name", value: request.bindingsEmailName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new conversation in your service
   *
   * @remarks
   * Create a new conversation in your service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceConversation(
    request: ConversationsV1ConversationApi.CreateServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
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
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "MessagingServiceSid",
              value: request.messagingServiceSid,
              schema: s.optional(s.string()),
            },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            {
              name: "State",
              value: request.state,
              schema: s.optional(s.lazy(() => serviceConversationEnumStateSchema)),
            },
            { name: "Timers.Inactive", value: request.timersInactive, schema: s.optional(s.string()) },
            { name: "Timers.Closed", value: request.timersClosed, schema: s.optional(s.string()) },
            {
              name: "Bindings.Email.Address",
              value: request.bindingsEmailAddress,
              schema: s.optional(s.string()),
            },
            { name: "Bindings.Email.Name", value: request.bindingsEmailName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a conversation from your account's default service
   *
   * @remarks
   * Remove a conversation from your account's default service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConversation(
    request: ConversationsV1ConversationApi.DeleteConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Remove a conversation from your service
   *
   * @remarks
   * Remove a conversation from your service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceConversation(
    request: ConversationsV1ConversationApi.DeleteServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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
   * Fetch a conversation from your account's default service
   *
   * @remarks
   * Fetch a conversation from your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConversation(
    request: ConversationsV1ConversationApi.FetchConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Conversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a conversation from your service
   *
   * @remarks
   * Fetch a conversation from your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceConversation(
    request: ConversationsV1ConversationApi.FetchServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of conversations in your account's default service
   *
   * @remarks
   * Retrieve a list of conversations in your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConversation(
    request: ConversationsV1ConversationApi.ListConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "StartDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.string()) },
          {
            name: "State",
            value: request.state,
            schema: s.optional(s.lazy(() => conversationEnumStateSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of conversations in your service
   *
   * @remarks
   * Retrieve a list of conversations in your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceConversation(
    request: ConversationsV1ConversationApi.ListServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          { name: "StartDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.string()) },
          {
            name: "State",
            value: request.state,
            schema: s.optional(s.lazy(() => serviceConversationEnumStateSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing conversation in your account's default service
   *
   * @remarks
   * Update an existing conversation in your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConversation(
    request: ConversationsV1ConversationApi.UpdateConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Conversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "MessagingServiceSid",
              value: request.messagingServiceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "State",
              value: request.state,
              schema: s.optional(s.lazy(() => conversationEnumStateSchema)),
            },
            { name: "Timers.Inactive", value: request.timersInactive, schema: s.optional(s.string()) },
            { name: "Timers.Closed", value: request.timersClosed, schema: s.optional(s.string()) },
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            {
              name: "Bindings.Email.Address",
              value: request.bindingsEmailAddress,
              schema: s.optional(s.string()),
            },
            { name: "Bindings.Email.Name", value: request.bindingsEmailName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing conversation in your service
   *
   * @remarks
   * Update an existing conversation in your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceConversation(
    request: ConversationsV1ConversationApi.UpdateServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "MessagingServiceSid",
              value: request.messagingServiceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "State",
              value: request.state,
              schema: s.optional(s.lazy(() => serviceConversationEnumStateSchema)),
            },
            { name: "Timers.Inactive", value: request.timersInactive, schema: s.optional(s.string()) },
            { name: "Timers.Closed", value: request.timersClosed, schema: s.optional(s.string()) },
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            {
              name: "Bindings.Email.Address",
              value: request.bindingsEmailAddress,
              schema: s.optional(s.string()),
            },
            { name: "Bindings.Email.Name", value: request.bindingsEmailName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConversationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ConversationApi {
  export type CreateConversationRequest = {
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The human-readable name of this conversation, limited to 256 characters. Optional. */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to
     * address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. */
    dateUpdated?: Date;
    /**
     * The unique ID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation
     * belongs to.
     */
    messagingServiceSid?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value
     * must contain structurally valid JSON if specified. **Note** that if the attributes are not
     * set "{}" will be returned.
     */
    attributes?: string;
    /**
     * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
     * `closed` and defaults to `active`
     */
    state?: ConversationEnumState;
    /**
     * ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for
     * this timer is 1 minute.
     */
    timersInactive?: string;
    /**
     * ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this
     * timer is 10 minutes.
     */
    timersClosed?: string;
    /**
     * The default email address that will be used when sending outbound emails in this
     * conversation.
     */
    bindingsEmailAddress?: string;
    /** The default name that will be used when sending outbound emails in this conversation. */
    bindingsEmailName?: string;
  };

  export type CreateServiceConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The human-readable name of this conversation, limited to 256 characters. Optional. */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to
     * address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value
     * must contain structurally valid JSON if specified. **Note** that if the attributes are not
     * set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The unique ID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation
     * belongs to.
     */
    messagingServiceSid?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. */
    dateUpdated?: Date;
    /**
     * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
     * `closed` and defaults to `active`
     */
    state?: ServiceConversationEnumState;
    /**
     * ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for
     * this timer is 1 minute.
     */
    timersInactive?: string;
    /**
     * ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this
     * timer is 10 minutes.
     */
    timersClosed?: string;
    /**
     * The default email address that will be used when sending outbound emails in this
     * conversation.
     */
    bindingsEmailAddress?: string;
    /** The default name that will be used when sending outbound emails in this conversation. */
    bindingsEmailName?: string;
  };

  export type DeleteConversationRequest = {
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name`
     * of the Conversation.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteServiceConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name`
     * of the Conversation.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchConversationRequest = {
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name`
     * of the Conversation.
     */
    sid: string;
  };

  export type FetchServiceConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name`
     * of the Conversation.
     */
    sid: string;
  };

  export type ListConversationRequest = {
    /**
     * Specifies the beginning of the date range for filtering Conversations based on their creation
     * date. Conversations that were created on or after this date will be included in the results.
     * The date must be in ISO8601 format, specifically starting at the beginning of the specified
     * date (YYYY-MM-DDT00:00:00Z), for precise filtering. This parameter can be combined with other
     * filters. If this filter is used, the returned list is sorted by latest conversation creation
     * date in descending order.
     */
    startDate?: string;
    /**
     * Defines the end of the date range for filtering conversations by their creation date. Only
     * conversations that were created on or before this date will appear in the results. The date
     * must be in ISO8601 format, specifically capturing up to the end of the specified date
     * (YYYY-MM-DDT23:59:59Z), to ensure that conversations from the entire end day are included.
     * This parameter can be combined with other filters. If this filter is used, the returned list
     * is sorted by latest conversation creation date in descending order.
     */
    endDate?: string;
    /**
     * State for sorting and filtering list of Conversations. Can be `active`, `inactive` or
     * `closed`
     */
    state?: ConversationEnumState;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * Specifies the beginning of the date range for filtering Conversations based on their creation
     * date. Conversations that were created on or after this date will be included in the results.
     * The date must be in ISO8601 format, specifically starting at the beginning of the specified
     * date (YYYY-MM-DDT00:00:00Z), for precise filtering. This parameter can be combined with other
     * filters. If this filter is used, the returned list is sorted by latest conversation creation
     * date in descending order.
     */
    startDate?: string;
    /**
     * Defines the end of the date range for filtering conversations by their creation date. Only
     * conversations that were created on or before this date will appear in the results. The date
     * must be in ISO8601 format, specifically capturing up to the end of the specified date
     * (YYYY-MM-DDT23:59:59Z), to ensure that conversations from the entire end day are included.
     * This parameter can be combined with other filters. If this filter is used, the returned list
     * is sorted by latest conversation creation date in descending order.
     */
    endDate?: string;
    /**
     * State for sorting and filtering list of Conversations. Can be `active`, `inactive` or
     * `closed`
     */
    state?: ServiceConversationEnumState;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConversationRequest = {
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name`
     * of the Conversation.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The human-readable name of this conversation, limited to 256 characters. Optional. */
    friendlyName?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. */
    dateUpdated?: Date;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value
     * must contain structurally valid JSON if specified. **Note** that if the attributes are not
     * set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The unique ID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation
     * belongs to.
     */
    messagingServiceSid?: string;
    /**
     * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
     * `closed` and defaults to `active`
     */
    state?: ConversationEnumState;
    /**
     * ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for
     * this timer is 1 minute.
     */
    timersInactive?: string;
    /**
     * ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this
     * timer is 10 minutes.
     */
    timersClosed?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to
     * address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
    /**
     * The default email address that will be used when sending outbound emails in this
     * conversation.
     */
    bindingsEmailAddress?: string;
    /** The default name that will be used when sending outbound emails in this conversation. */
    bindingsEmailName?: string;
  };

  export type UpdateServiceConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name`
     * of the Conversation.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The human-readable name of this conversation, limited to 256 characters. Optional. */
    friendlyName?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. */
    dateUpdated?: Date;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value
     * must contain structurally valid JSON if specified. **Note** that if the attributes are not
     * set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The unique ID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation
     * belongs to.
     */
    messagingServiceSid?: string;
    /**
     * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
     * `closed` and defaults to `active`
     */
    state?: ServiceConversationEnumState;
    /**
     * ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for
     * this timer is 1 minute.
     */
    timersInactive?: string;
    /**
     * ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this
     * timer is 10 minutes.
     */
    timersClosed?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to
     * address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
    /**
     * The default email address that will be used when sending outbound emails in this
     * conversation.
     */
    bindingsEmailAddress?: string;
    /** The default name that will be used when sending outbound emails in this conversation. */
    bindingsEmailName?: string;
  };
}
