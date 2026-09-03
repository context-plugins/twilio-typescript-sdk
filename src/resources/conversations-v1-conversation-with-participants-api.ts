import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createConversationWithParticipants(
    request: ConversationsV1ConversationWithParticipantsApi.CreateConversationWithParticipantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationWithParticipants, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationWithParticipants, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/ConversationWithParticipants"),
        auth: this.#auth.accountSidAuthToken,
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createServiceConversationWithParticipants(
    request: ConversationsV1ConversationWithParticipantsApi.CreateServiceConversationWithParticipantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationWithParticipants, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationWithParticipants, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/ConversationWithParticipants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ConversationWithParticipantsApi {
  export type CreateConversationWithParticipantsRequest = {
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    uniqueName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    messagingServiceSid?: string;
    attributes?: string;
    state?: ConversationWithParticipantsEnumState;
    timersInactive?: string;
    timersClosed?: string;
    bindingsEmailAddress?: string;
    bindingsEmailName?: string;
    participant?: string[];
  };

  export type CreateServiceConversationWithParticipantsRequest = {
    chatServiceSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    uniqueName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    messagingServiceSid?: string;
    attributes?: string;
    state?: ServiceConversationWithParticipantsEnumState;
    timersInactive?: string;
    timersClosed?: string;
    bindingsEmailAddress?: string;
    bindingsEmailName?: string;
    participant?: string[];
  };
}
