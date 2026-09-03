import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  conversationsV2CommunicationSchema,
  type ConversationsV2Communication,
} from "../models/conversations-v2-communication.js";
import {
  v2ConversationsCommunicationsRequestSchema,
  type V2ConversationsCommunicationsRequest,
} from "../models/v2-conversations-communications-request.js";
import {
  v2ConversationsCommunicationsResponseSchema,
  type V2ConversationsCommunicationsResponse,
} from "../models/v2-conversations-communications-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV2CommunicationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCommunicationInConversation(
    request: ConversationsV2CommunicationApi.CreateCommunicationInConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConversationsV2Communication,
    ConversationsV2CommunicationApi.CreateCommunicationInConversationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Communications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ConversationsCommunicationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2CommunicationSchema },
        errorFactory: ConversationsV2CommunicationApi.CreateCommunicationInConversationError,
      },
      options,
    );
  }

  fetchCommunication(
    request: ConversationsV2CommunicationApi.FetchCommunicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Communication, ConversationsV2CommunicationApi.FetchCommunicationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Communications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2CommunicationSchema },
        errorFactory: ConversationsV2CommunicationApi.FetchCommunicationError,
      },
      options,
    );
  }

  listCommunicationByConversation(
    request: ConversationsV2CommunicationApi.ListCommunicationByConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V2ConversationsCommunicationsResponse,
    ConversationsV2CommunicationApi.ListCommunicationByConversationError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/Conversations/{ConversationSid}/Communications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "channelId", value: request.channelId, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ConversationsCommunicationsResponseSchema },
        errorFactory: ConversationsV2CommunicationApi.ListCommunicationByConversationError,
      },
      options,
    );
  }
}

export namespace ConversationsV2CommunicationApi {
  export type CreateCommunicationInConversationRequest = {
    conversationSid: string;
    body?: V2ConversationsCommunicationsRequest;
  };

  export class CreateCommunicationInConversationError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error13",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error14",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error15",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<CreateCommunicationInConversationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchCommunicationRequest = {
    conversationSid: string;
    sid: string;
  };

  export class FetchCommunicationError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error13",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error14",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error15",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<FetchCommunicationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type ListCommunicationByConversationRequest = {
    conversationSid: string;
    channelId?: string;
    pageSize?: number;
    pageToken?: string;
  };

  export class ListCommunicationByConversationError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error13",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error14",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error15",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<ListCommunicationByConversationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
