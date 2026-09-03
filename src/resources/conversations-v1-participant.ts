import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createConversationParticipant(
    request: ConversationsV1Participant.CreateConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationParticipant, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createServiceConversationParticipant(
    request: ConversationsV1Participant.CreateServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteConversationParticipant(
    request: ConversationsV1Participant.DeleteConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
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

  deleteServiceConversationParticipant(
    request: ConversationsV1Participant.DeleteServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
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

  fetchConversationParticipant(
    request: ConversationsV1Participant.FetchConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationParticipant, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationParticipant, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceConversationParticipant(
    request: ConversationsV1Participant.FetchServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationParticipantSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConversationParticipant(
    request: ConversationsV1Participant.ListConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationParticipantResponse, ResponseError> {
    return this.#rawClient.execute<ListConversationParticipantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationParticipantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceConversationParticipant(
    request: ConversationsV1Participant.ListServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationParticipantResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceConversationParticipantResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationParticipantResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConversationParticipant(
    request: ConversationsV1Participant.UpdateConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationParticipant, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
              schema: s.optionalNullable(s.number()),
            },
            { name: "LastReadTimestamp", value: request.lastReadTimestamp, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceConversationParticipant(
    request: ConversationsV1Participant.UpdateServiceConversationParticipantRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
              schema: s.optionalNullable(s.number()),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Participant {
  export type CreateConversationParticipantRequest = {
    conversationSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    identity?: string;
    messagingBindingAddress?: string;
    messagingBindingProxyAddress?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    messagingBindingProjectedAddress?: string;
    roleSid?: string;
  };

  export type CreateServiceConversationParticipantRequest = {
    chatServiceSid: string;
    conversationSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    identity?: string;
    messagingBindingAddress?: string;
    messagingBindingProxyAddress?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    messagingBindingProjectedAddress?: string;
    roleSid?: string;
  };

  export type DeleteConversationParticipantRequest = {
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteServiceConversationParticipantRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchConversationParticipantRequest = {
    conversationSid: string;
    sid: string;
  };

  export type FetchServiceConversationParticipantRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
  };

  export type ListConversationParticipantRequest = {
    conversationSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceConversationParticipantRequest = {
    chatServiceSid: string;
    conversationSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConversationParticipantRequest = {
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    roleSid?: string;
    messagingBindingProxyAddress?: string;
    messagingBindingProjectedAddress?: string;
    identity?: string;
    lastReadMessageIndex?: number | null;
    lastReadTimestamp?: string;
  };

  export type UpdateServiceConversationParticipantRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    dateCreated?: Date;
    dateUpdated?: Date;
    identity?: string;
    attributes?: string;
    roleSid?: string;
    messagingBindingProxyAddress?: string;
    messagingBindingProjectedAddress?: string;
    lastReadMessageIndex?: number | null;
    lastReadTimestamp?: string;
  };
}
