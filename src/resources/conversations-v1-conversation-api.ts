import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createConversation(
    request: ConversationsV1ConversationApi.CreateConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Conversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Conversation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createServiceConversation(
    request: ConversationsV1ConversationApi.CreateServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteConversation(
    request: ConversationsV1ConversationApi.DeleteConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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

  deleteServiceConversation(
    request: ConversationsV1ConversationApi.DeleteServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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

  fetchConversation(
    request: ConversationsV1ConversationApi.FetchConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Conversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Conversation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceConversation(
    request: ConversationsV1ConversationApi.FetchServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConversationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConversation(
    request: ConversationsV1ConversationApi.ListConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationResponse, ResponseError> {
    return this.#rawClient.execute<ListConversationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "StartDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optional(s.string()) },
          {
            name: "State",
            value: request.state,
            schema: s.optional(s.lazy(() => conversationEnumStateSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceConversation(
    request: ConversationsV1ConversationApi.ListServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceConversationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConversation(
    request: ConversationsV1ConversationApi.UpdateConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Conversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Conversation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceConversation(
    request: ConversationsV1ConversationApi.UpdateServiceConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversation, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ConversationApi {
  export type CreateConversationRequest = {
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    uniqueName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    messagingServiceSid?: string;
    attributes?: string;
    state?: ConversationEnumState;
    timersInactive?: string;
    timersClosed?: string;
    bindingsEmailAddress?: string;
    bindingsEmailName?: string;
  };

  export type CreateServiceConversationRequest = {
    chatServiceSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    uniqueName?: string;
    attributes?: string;
    messagingServiceSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    state?: ServiceConversationEnumState;
    timersInactive?: string;
    timersClosed?: string;
    bindingsEmailAddress?: string;
    bindingsEmailName?: string;
  };

  export type DeleteConversationRequest = {
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteServiceConversationRequest = {
    chatServiceSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchConversationRequest = {
    sid: string;
  };

  export type FetchServiceConversationRequest = {
    chatServiceSid: string;
    sid: string;
  };

  export type ListConversationRequest = {
    startDate?: string;
    endDate?: string;
    state?: ConversationEnumState;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceConversationRequest = {
    chatServiceSid: string;
    startDate?: string;
    endDate?: string;
    state?: ServiceConversationEnumState;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConversationRequest = {
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    messagingServiceSid?: string;
    state?: ConversationEnumState;
    timersInactive?: string;
    timersClosed?: string;
    uniqueName?: string;
    bindingsEmailAddress?: string;
    bindingsEmailName?: string;
  };

  export type UpdateServiceConversationRequest = {
    chatServiceSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    messagingServiceSid?: string;
    state?: ServiceConversationEnumState;
    timersInactive?: string;
    timersClosed?: string;
    uniqueName?: string;
    bindingsEmailAddress?: string;
    bindingsEmailName?: string;
  };
}
