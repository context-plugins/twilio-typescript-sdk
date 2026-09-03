import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createConversationMessage(
    request: ConversationsV1Message.CreateConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessage, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createServiceConversationMessage(
    request: ConversationsV1Message.CreateServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteConversationMessage(
    request: ConversationsV1Message.DeleteConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{Sid}"),
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

  deleteServiceConversationMessage(
    request: ConversationsV1Message.DeleteServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
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

  fetchConversationMessage(
    request: ConversationsV1Message.FetchConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessage, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationMessage, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationMessageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceConversationMessage(
    request: ConversationsV1Message.FetchServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationMessage, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
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
          schema: conversationsV1ServiceServiceConversationServiceConversationMessageSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConversationMessage(
    request: ConversationsV1Message.ListConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationMessageResponse, ResponseError> {
    return this.#rawClient.execute<ListConversationMessageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          {
            name: "Order",
            value: request.order,
            schema: s.optional(s.lazy(() => challengeEnumListOrdersSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationMessageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceConversationMessage(
    request: ConversationsV1Message.ListServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationMessageResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceConversationMessageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationMessageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConversationMessage(
    request: ConversationsV1Message.UpdateConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessage, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{Sid}"),
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceConversationMessage(
    request: ConversationsV1Message.UpdateServiceConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Message {
  export type CreateConversationMessageRequest = {
    conversationSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    author?: string;
    body2?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    mediaSid?: string;
    contentSid?: string;
    contentVariables?: string;
    subject?: string;
  };

  export type CreateServiceConversationMessageRequest = {
    chatServiceSid: string;
    conversationSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    author?: string;
    body2?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    mediaSid?: string;
    contentSid?: string;
    contentVariables?: string;
    subject?: string;
  };

  export type DeleteConversationMessageRequest = {
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteServiceConversationMessageRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchConversationMessageRequest = {
    conversationSid: string;
    sid: string;
  };

  export type FetchServiceConversationMessageRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
  };

  export type ListConversationMessageRequest = {
    conversationSid: string;
    order?: ChallengeEnumListOrders;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceConversationMessageRequest = {
    chatServiceSid: string;
    conversationSid: string;
    order?: ChallengeEnumListOrders;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConversationMessageRequest = {
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    author?: string;
    body2?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    subject?: string;
  };

  export type UpdateServiceConversationMessageRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    author?: string;
    body2?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    attributes?: string;
    subject?: string;
  };
}
