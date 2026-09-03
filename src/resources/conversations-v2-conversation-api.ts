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
  conversationsV2ConversationSchema,
  type ConversationsV2Conversation,
} from "../models/conversations-v2-conversation.js";
import {
  conversationsV2OperationAcceptedSchema,
  type ConversationsV2OperationAccepted,
} from "../models/conversations-v2-operation-accepted.js";
import { status31Schema, type Status31 } from "../models/status31.js";
import {
  v2ConversationsRequestSchema,
  type V2ConversationsRequest,
} from "../models/v2-conversations-request.js";
import {
  v2ConversationsRequest1Schema,
  type V2ConversationsRequest1,
} from "../models/v2-conversations-request1.js";
import {
  v2ConversationsRequest2Schema,
  type V2ConversationsRequest2,
} from "../models/v2-conversations-request2.js";
import {
  v2ConversationsResponseSchema,
  type V2ConversationsResponse,
} from "../models/v2-conversations-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV2ConversationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createConversationWithConfig(
    request: ConversationsV2ConversationApi.CreateConversationWithConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConversationsV2Conversation,
    ConversationsV2ConversationApi.CreateConversationWithConfigError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default7("/v2/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ConversationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2ConversationSchema },
        errorFactory: ConversationsV2ConversationApi.CreateConversationWithConfigError,
      },
      options,
    );
  }

  deleteConversationAsync(
    request: ConversationsV2ConversationApi.DeleteConversationAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConversationsV2OperationAccepted,
    ConversationsV2ConversationApi.DeleteConversationAsyncError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default7("/v2/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2OperationAcceptedSchema },
        errorFactory: ConversationsV2ConversationApi.DeleteConversationAsyncError,
      },
      options,
    );
  }

  fetchConversation2(
    request: ConversationsV2ConversationApi.FetchConversation2Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.FetchConversation2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2ConversationSchema },
        errorFactory: ConversationsV2ConversationApi.FetchConversation2Error,
      },
      options,
    );
  }

  listConversationByAccount(
    request: ConversationsV2ConversationApi.ListConversationByAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ConversationsResponse, ConversationsV2ConversationApi.ListConversationByAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/Conversations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => status31Schema))),
          },
          { name: "channelId", value: request.channelId, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ConversationsResponseSchema },
        errorFactory: ConversationsV2ConversationApi.ListConversationByAccountError,
      },
      options,
    );
  }

  patchConversationById(
    request: ConversationsV2ConversationApi.PatchConversationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.PatchConversationByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default7("/v2/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ConversationsRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2ConversationSchema },
        errorFactory: ConversationsV2ConversationApi.PatchConversationByIdError,
      },
      options,
    );
  }

  updateConversationById(
    request: ConversationsV2ConversationApi.UpdateConversationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.UpdateConversationByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default7("/v2/Conversations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ConversationsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2ConversationSchema },
        errorFactory: ConversationsV2ConversationApi.UpdateConversationByIdError,
      },
      options,
    );
  }
}

export namespace ConversationsV2ConversationApi {
  export type CreateConversationWithConfigRequest = {
    body?: V2ConversationsRequest;
  };

  export class CreateConversationWithConfigError extends ResponseError<
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
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error16",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<CreateConversationWithConfigError> = [
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
        on: 409,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error16",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type DeleteConversationAsyncRequest = {
    sid: string;
    idempotencyKey?: string;
  };

  export class DeleteConversationAsyncError extends ResponseError<
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
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error16",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<DeleteConversationAsyncError> = [
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
        on: 409,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error16",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type FetchConversation2Request = {
    sid: string;
  };

  export class FetchConversation2Error extends ResponseError<
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
    static readonly errors: ErrorDecoders<FetchConversation2Error> = [
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

  export type ListConversationByAccountRequest = {
    status?: Status31[];
    channelId?: string;
    pageSize?: number;
    pageToken?: string;
  };

  export class ListConversationByAccountError extends ResponseError<
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
    static readonly errors: ErrorDecoders<ListConversationByAccountError> = [
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

  export type PatchConversationByIdRequest = {
    sid: string;
    body?: V2ConversationsRequest2;
  };

  export class PatchConversationByIdError extends ResponseError<
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
    static readonly errors: ErrorDecoders<PatchConversationByIdError> = [
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

  export type UpdateConversationByIdRequest = {
    sid: string;
    body?: V2ConversationsRequest1;
  };

  export class UpdateConversationByIdError extends ResponseError<
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
    static readonly errors: ErrorDecoders<UpdateConversationByIdError> = [
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
