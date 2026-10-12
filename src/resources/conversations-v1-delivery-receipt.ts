import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Fetch the delivery and read receipts of the conversation message
   *
   * @remarks
   * Fetch the delivery and read receipts of the conversation message
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.FetchConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationMessageConversationMessageReceipt, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ConversationConversationMessageConversationMessageReceiptSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch the delivery and read receipts of the conversation message
   *
   * @remarks
   * Fetch the delivery and read receipts of the conversation message
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.FetchServiceConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceConversationMessageReceipt, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceConversationMessageReceiptSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all delivery and read receipts of the conversation message
   *
   * @remarks
   * Retrieve a list of all delivery and read receipts of the conversation message
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.ListConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationMessageReceiptResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
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
        success: { kind: "json", schema: listConversationMessageReceiptResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all delivery and read receipts of the conversation message
   *
   * @remarks
   * Retrieve a list of all delivery and read receipts of the conversation message
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceConversationMessageReceipt(
    request: ConversationsV1DeliveryReceipt.ListServiceConversationMessageReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationMessageReceiptResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
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
        success: { kind: "json", schema: listServiceConversationMessageReceiptResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1DeliveryReceipt {
  export type FetchConversationMessageReceiptRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /**
     * The SID of the message within a
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the
     * delivery receipt belongs to.
     */
    messageSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type FetchServiceConversationMessageReceiptRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Message resource
     * is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /**
     * The SID of the message within a
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the
     * delivery receipt belongs to.
     */
    messageSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type ListConversationMessageReceiptRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /**
     * The SID of the message within a
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the
     * delivery receipt belongs to.
     */
    messageSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceConversationMessageReceiptRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Message resource
     * is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * message.
     */
    conversationSid: string;
    /**
     * The SID of the message within a
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the
     * delivery receipt belongs to.
     */
    messageSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
