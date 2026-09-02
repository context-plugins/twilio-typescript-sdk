import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  conversationsV1ConversationConversationMessageConversationMessageReceiptSchema,
  type ConversationsV1ConversationConversationMessageConversationMessageReceipt,
} from "../models/conversations-v1-conversation-conversation-message-conversation-message-receipt.js";
import {
  listConversationMessageReceiptResponseSchema,
  type ListConversationMessageReceiptResponse,
} from "../models/list-conversation-message-receipt-response.js";
import {
  listServiceConversationMessageReceiptResponseSchema,
  type ListServiceConversationMessageReceiptResponse,
} from "../models/list-service-conversation-message-receipt-response.js";
import {
  serviceConversationMessageReceiptSchema,
  type ServiceConversationMessageReceipt,
} from "../models/service-conversation-message-receipt.js";
import type { Servers } from "../servers.js";

export class ConversationsV1DeliveryReceipt {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.FetchConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessageConversationMessageReceipt, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationMessageConversationMessageReceipt, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ConversationConversationMessageConversationMessageReceiptSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.FetchServiceConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceConversationMessageReceipt, ResponseError> {
    return this.#rawClient.execute<ServiceConversationMessageReceipt, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceConversationMessageReceiptSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.ListConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationMessageReceiptResponse, ResponseError> {
    return this.#rawClient.execute<ListConversationMessageReceiptResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationMessageReceiptResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.ListServiceConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationMessageReceiptResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceConversationMessageReceiptResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationMessageReceiptResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1DeliveryReceipt {
  export type FetchConversationMessageReceiptRequest = {
    conversationSid: string;
    messageSid: string;
    sid: string;
  };

  export type FetchServiceConversationMessageReceiptRequest = {
    chatServiceSid: string;
    conversationSid: string;
    messageSid: string;
    sid: string;
  };

  export type ListConversationMessageReceiptRequest = {
    conversationSid: string;
    messageSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceConversationMessageReceiptRequest = {
    chatServiceSid: string;
    conversationSid: string;
    messageSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
