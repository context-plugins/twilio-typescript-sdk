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
  conversationsV2ActionSchema,
  type ConversationsV2Action,
} from "../models/conversations-v2-action.js";
import {
  conversationsV2SendMessageActionRequestSchema,
  type ConversationsV2SendMessageActionRequest,
} from "../models/conversations-v2-send-message-action-request.js";
import type { Servers } from "../servers.js";

export class ConversationsV2ActionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createConversationAction(
    request: ConversationsV2ActionApi.CreateConversationActionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Action, ConversationsV2ActionApi.CreateConversationActionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default7("/v2/Conversations/{ConversationId}/Actions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationId", value: request.conversationId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: conversationsV2SendMessageActionRequestSchema },
      },
      {
        success: { kind: "json", schema: conversationsV2ActionSchema },
        errorFactory: ConversationsV2ActionApi.CreateConversationActionError,
      },
      options,
    );
  }

  fetchConversationAction(
    request: ConversationsV2ActionApi.FetchConversationActionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Action, ConversationsV2ActionApi.FetchConversationActionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/Conversations/{ConversationId}/Actions/{ActionId}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationId", value: request.conversationId, schema: s.string() },
          { name: "ActionId", value: request.actionId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2ActionSchema },
        errorFactory: ConversationsV2ActionApi.FetchConversationActionError,
      },
      options,
    );
  }
}

export namespace ConversationsV2ActionApi {
  export type CreateConversationActionRequest = {
    conversationId: string;
    body: ConversationsV2SendMessageActionRequest;
  };

  export class CreateConversationActionError extends ResponseError<
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
    static readonly errors: ErrorDecoders<CreateConversationActionError> = [
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

  export type FetchConversationActionRequest = {
    conversationId: string;
    actionId: string;
  };

  export class FetchConversationActionError extends ResponseError<
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
    static readonly errors: ErrorDecoders<FetchConversationActionError> = [
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
