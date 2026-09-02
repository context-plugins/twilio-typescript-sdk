import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listParticipantConversationResponseSchema,
  type ListParticipantConversationResponse,
} from "../models/list-participant-conversation-response.js";
import {
  listServiceParticipantConversationResponseSchema,
  type ListServiceParticipantConversationResponse,
} from "../models/list-service-participant-conversation-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV1ParticipantConversationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listParticipantConversation(
    request: ConversationsV1ParticipantConversationApi.ListParticipantConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListParticipantConversationResponse, ResponseError> {
    return this.#rawClient.execute<ListParticipantConversationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/ParticipantConversations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
          { name: "Address", value: request.address, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listParticipantConversationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceParticipantConversation(
    request: ConversationsV1ParticipantConversationApi.ListServiceParticipantConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceParticipantConversationResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceParticipantConversationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/ParticipantConversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
          { name: "Address", value: request.address, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceParticipantConversationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ParticipantConversationApi {
  export type ListParticipantConversationRequest = {
    identity?: string;
    address?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceParticipantConversationRequest = {
    chatServiceSid: string;
    identity?: string;
    address?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
