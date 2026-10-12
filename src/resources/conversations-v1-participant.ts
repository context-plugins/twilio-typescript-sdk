import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { confirmationSchema, type Confirmation } from "../models/confirmation.js";
import {
  conversationsV1ConversationConversationParticipantSchema,
  type ConversationsV1ConversationConversationParticipant,
} from "../models/conversations-v1-conversation-conversation-participant.js";
import {
  conversationsV1ServiceServiceConversationServiceConversationParticipantSchema,
  type ConversationsV1ServiceServiceConversationServiceConversationParticipant,
} from "../models/conversations-v1-service-service-conversation-service-conversation-participant.js";
import {
  listConversationParticipantResponseSchema,
  type ListConversationParticipantResponse,
} from "../models/list-conversation-participant-response.js";
import {
  listServiceConversationParticipantResponseSchema,
  type ListServiceConversationParticipantResponse,
} from "../models/list-service-conversation-participant-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV1Participant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a new participant to the conversation
   *
   * @remarks
   * Add a new participant to the conversation
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConversationParticipant(
    request: ConversationsV1Participant.CreateConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants"),
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
            { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
            {
              name: "MessagingBinding.Address",
              value: request.messagingBindingAddress,
              schema: s.optional(s.string()),
            },
            {
              name: "MessagingBinding.ProxyAddress",
              value: request.messagingBindingProxyAddress,
              schema: s.optional(s.string()),
            },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "MessagingBinding.ProjectedAddress",
              value: request.messagingBindingProjectedAddress,
              schema: s.optional(s.string()),
            },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add a new participant to the conversation in a specific service
   *
   * @remarks
   * Add a new participant to the conversation in a specific service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceConversationParticipant(
    request: ConversationsV1Participant.CreateServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants",
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
            { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
            {
              name: "MessagingBinding.Address",
              value: request.messagingBindingAddress,
              schema: s.optional(s.string()),
            },
            {
              name: "MessagingBinding.ProxyAddress",
              value: request.messagingBindingProxyAddress,
              schema: s.optional(s.string()),
            },
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            {
              name: "MessagingBinding.ProjectedAddress",
              value: request.messagingBindingProjectedAddress,
              schema: s.optional(s.string()),
            },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationParticipantSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a participant from the conversation
   *
   * @remarks
   * Remove a participant from the conversation
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConversationParticipant(
    request: ConversationsV1Participant.DeleteConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants/{Sid}"),
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
   * Remove a participant from the conversation
   *
   * @remarks
   * Remove a participant from the conversation
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceConversationParticipant(
    request: ConversationsV1Participant.DeleteServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
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
   * Fetch a participant of the conversation
   *
   * @remarks
   * Fetch a participant of the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConversationParticipant(
    request: ConversationsV1Participant.FetchConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants/{Sid}"),
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
        success: { kind: "json", schema: conversationsV1ConversationConversationParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a participant of the conversation
   *
   * @remarks
   * Fetch a participant of the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceConversationParticipant(
    request: ConversationsV1Participant.FetchServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
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
          schema: conversationsV1ServiceServiceConversationServiceConversationParticipantSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all participants of the conversation
   *
   * @remarks
   * Retrieve a list of all participants of the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConversationParticipant(
    request: ConversationsV1Participant.ListConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationParticipantResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationParticipantResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all participants of the conversation
   *
   * @remarks
   * Retrieve a list of all participants of the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceConversationParticipant(
    request: ConversationsV1Participant.ListServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationParticipantResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
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
        success: { kind: "json", schema: listServiceConversationParticipantResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing participant in the conversation
   *
   * @remarks
   * Update an existing participant in the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConversationParticipant(
    request: ConversationsV1Participant.UpdateConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants/{Sid}"),
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
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
            {
              name: "MessagingBinding.ProxyAddress",
              value: request.messagingBindingProxyAddress,
              schema: s.optional(s.string()),
            },
            {
              name: "MessagingBinding.ProjectedAddress",
              value: request.messagingBindingProjectedAddress,
              schema: s.optional(s.string()),
            },
            { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
            {
              name: "LastReadMessageIndex",
              value: request.lastReadMessageIndex,
              schema: s.optionalNullable(s.int()),
            },
            { name: "LastReadTimestamp", value: request.lastReadTimestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing participant in the conversation
   *
   * @remarks
   * Update an existing participant in the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceConversationParticipant(
    request: ConversationsV1Participant.UpdateServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
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
            { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
            { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateTime()) },
            { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
            {
              name: "MessagingBinding.ProxyAddress",
              value: request.messagingBindingProxyAddress,
              schema: s.optional(s.string()),
            },
            {
              name: "MessagingBinding.ProjectedAddress",
              value: request.messagingBindingProjectedAddress,
              schema: s.optional(s.string()),
            },
            {
              name: "LastReadMessageIndex",
              value: request.lastReadMessageIndex,
              schema: s.optionalNullable(s.int()),
            },
            { name: "LastReadTimestamp", value: request.lastReadTimestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationParticipantSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Participant {
  export type CreateConversationParticipantRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /**
     * A unique string identifier for the conversation participant as [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is
     * non-null if (and only if) the participant is using the Conversations SDK to communicate.
     * Limited to 256 characters.
     */
    identity?: string;
    /**
     * The address of the participant's device, e.g. a phone or WhatsApp number. Together with the
     * Proxy address, this determines a participant uniquely. This field (with proxy_address) is
     * only null when the participant is interacting from an SDK endpoint (see the 'identity'
     * field).
     */
    messagingBindingAddress?: string;
    /**
     * The address of the Twilio phone number (or WhatsApp number) that the participant is in
     * contact with. This field, together with participant address, is only null when the
     * participant is interacting from an SDK endpoint (see the 'identity' field).
     */
    messagingBindingProxyAddress?: string;
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
     * The address of the Twilio phone number that is used in Group MMS. Communication mask for the
     * Conversation participant with Identity.
     */
    messagingBindingProjectedAddress?: string;
    /**
     * The SID of a conversation-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the
     * participant.
     */
    roleSid?: string;
  };

  export type CreateServiceConversationParticipantRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /**
     * A unique string identifier for the conversation participant as [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is
     * non-null if (and only if) the participant is using the [Conversation
     * SDK](https://www.twilio.com/docs/conversations/sdk-overview) to communicate. Limited to 256
     * characters.
     */
    identity?: string;
    /**
     * The address of the participant's device, e.g. a phone or WhatsApp number. Together with the
     * Proxy address, this determines a participant uniquely. This field (with `proxy_address`) is
     * only null when the participant is interacting from an SDK endpoint (see the `identity`
     * field).
     */
    messagingBindingAddress?: string;
    /**
     * The address of the Twilio phone number (or WhatsApp number) that the participant is in
     * contact with. This field, together with participant address, is only null when the
     * participant is interacting from an SDK endpoint (see the `identity` field).
     */
    messagingBindingProxyAddress?: string;
    /** The date on which this resource was created. */
    dateCreated?: Date;
    /** The date on which this resource was last updated. */
    dateUpdated?: Date;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value
     * must contain structurally valid JSON if specified. **Note** that if the attributes are not
     * set `{}` will be returned.
     */
    attributes?: string;
    /** The address of the Twilio phone number that is used in Group MMS. */
    messagingBindingProjectedAddress?: string;
    /**
     * The SID of a conversation-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the
     * participant.
     */
    roleSid?: string;
  };

  export type DeleteConversationParticipantRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteServiceConversationParticipantRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchConversationParticipantRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /**
     * A 34 character string that uniquely identifies this resource. Alternatively, you can pass a
     * Participant's `identity` rather than the SID.
     */
    sid: string;
  };

  export type FetchServiceConversationParticipantRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /**
     * A 34 character string that uniquely identifies this resource. Alternatively, you can pass a
     * Participant's `identity` rather than the SID.
     */
    sid: string;
  };

  export type ListConversationParticipantRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for
     * participants.
     */
    conversationSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceConversationParticipantRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for
     * participants.
     */
    conversationSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConversationParticipantRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
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
     * The SID of a conversation-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the
     * participant.
     */
    roleSid?: string;
    /**
     * The address of the Twilio phone number that the participant is in contact with. 'null' value
     * will remove it.
     */
    messagingBindingProxyAddress?: string;
    /**
     * The address of the Twilio phone number that is used in Group MMS. 'null' value will remove
     * it.
     */
    messagingBindingProjectedAddress?: string;
    /**
     * A unique string identifier for the conversation participant as [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is
     * non-null if (and only if) the participant is using the Conversations SDK to communicate.
     * Limited to 256 characters.
     */
    identity?: string;
    /**
     * Index of last “read” message in the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the
     * Participant.
     */
    lastReadMessageIndex?: number | null;
    /**
     * Timestamp of last “read” message in the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the
     * Participant.
     */
    lastReadTimestamp?: string;
  };

  export type UpdateServiceConversationParticipantRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * participant.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The date on which this resource was created. */
    dateCreated?: Date;
    /** The date on which this resource was last updated. */
    dateUpdated?: Date;
    /**
     * A unique string identifier for the conversation participant as [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is
     * non-null if (and only if) the participant is using the [Conversation
     * SDK](https://www.twilio.com/docs/conversations/sdk-overview) to communicate. Limited to 256
     * characters.
     */
    identity?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value
     * must contain structurally valid JSON if specified. **Note** that if the attributes are not
     * set `{}` will be returned.
     */
    attributes?: string;
    /**
     * The SID of a conversation-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the
     * participant.
     */
    roleSid?: string;
    /**
     * The address of the Twilio phone number that the participant is in contact with. 'null' value
     * will remove it.
     */
    messagingBindingProxyAddress?: string;
    /**
     * The address of the Twilio phone number that is used in Group MMS. 'null' value will remove
     * it.
     */
    messagingBindingProjectedAddress?: string;
    /**
     * Index of last “read” message in the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the
     * Participant.
     */
    lastReadMessageIndex?: number | null;
    /**
     * Timestamp of last “read” message in the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the
     * Participant.
     */
    lastReadTimestamp?: string;
  };
}
