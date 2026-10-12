import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { confirmationSchema, type Confirmation } from "../models/confirmation.js";
import {
  conversationWithParticipantsEnumStateSchema,
  type ConversationWithParticipantsEnumState,
} from "../models/conversation-with-participants-enum-state.js";
import {
  conversationsV1ConversationWithParticipantsSchema,
  type ConversationsV1ConversationWithParticipants,
} from "../models/conversations-v1-conversation-with-participants.js";
import {
  conversationsV1ServiceServiceConversationWithParticipantsSchema,
  type ConversationsV1ServiceServiceConversationWithParticipants,
} from "../models/conversations-v1-service-service-conversation-with-participants.js";
import {
  serviceConversationWithParticipantsEnumStateSchema,
  type ServiceConversationWithParticipantsEnumState,
} from "../models/service-conversation-with-participants-enum-state.js";
import type { Servers } from "../servers.js";

export class ConversationsV1ConversationWithParticipantsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new conversation with the list of participants in your account's default service
   *
   * @remarks
   * Create a new conversation with the list of participants in your account's default service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConversationWithParticipants(
    request: ConversationsV1ConversationWithParticipantsApi.CreateConversationWithParticipantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationWithParticipants, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/ConversationWithParticipants"),
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
              schema: s.optional(s.lazy(() => conversationWithParticipantsEnumStateSchema)),
            },
            { name: "Timers.Inactive", value: request.timersInactive, schema: s.optional(s.string()) },
            { name: "Timers.Closed", value: request.timersClosed, schema: s.optional(s.string()) },
            {
              name: "Bindings.Email.Address",
              value: request.bindingsEmailAddress,
              schema: s.optional(s.string()),
            },
            { name: "Bindings.Email.Name", value: request.bindingsEmailName, schema: s.optional(s.string()) },
            { name: "Participant", value: request.participant, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationWithParticipantsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new conversation with the list of participants in your account's default service
   *
   * @remarks
   * Create a new conversation with the list of participants in your account's default service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceConversationWithParticipants(
    request: ConversationsV1ConversationWithParticipantsApi.CreateServiceConversationWithParticipantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationWithParticipants, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/ConversationWithParticipants"),
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
              schema: s.optional(s.lazy(() => serviceConversationWithParticipantsEnumStateSchema)),
            },
            { name: "Timers.Inactive", value: request.timersInactive, schema: s.optional(s.string()) },
            { name: "Timers.Closed", value: request.timersClosed, schema: s.optional(s.string()) },
            {
              name: "Bindings.Email.Address",
              value: request.bindingsEmailAddress,
              schema: s.optional(s.string()),
            },
            { name: "Bindings.Email.Name", value: request.bindingsEmailName, schema: s.optional(s.string()) },
            { name: "Participant", value: request.participant, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConversationWithParticipantsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ConversationWithParticipantsApi {
  export type CreateConversationWithParticipantsRequest = {
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
    state?: ConversationWithParticipantsEnumState;
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
    /**
     * The participant to be added to the conversation in JSON format. The JSON object attributes
     * are as parameters in [Participant
     * Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource).
     * The maximum number of participants that can be added in a single request is 10.
     */
    participant?: string[];
  };

  export type CreateServiceConversationWithParticipantsRequest = {
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
    state?: ServiceConversationWithParticipantsEnumState;
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
    /**
     * The participant to be added to the conversation in JSON format. The JSON object attributes
     * are as parameters in [Participant
     * Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource).
     * The maximum number of participants that can be added in a single request is 10.
     */
    participant?: string[];
  };
}
