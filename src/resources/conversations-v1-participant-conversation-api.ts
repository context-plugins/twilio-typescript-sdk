import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Retrieve a list of all Conversations that this Participant belongs to by identity or by
   * address. Only one parameter should be specified.
   *
   * @remarks
   * Retrieve a list of all Conversations that this Participant belongs to by identity or by
   * address. Only one parameter should be specified.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listParticipantConversation(
    request: ConversationsV1ParticipantConversationApi.ListParticipantConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListParticipantConversationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/ParticipantConversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
          { name: "Address", value: request.address, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listParticipantConversationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Conversations that this Participant belongs to by identity or by
   * address. Only one parameter should be specified.
   *
   * @remarks
   * Retrieve a list of all Conversations that this Participant belongs to by identity or by
   * address. Only one parameter should be specified.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceParticipantConversation(
    request: ConversationsV1ParticipantConversationApi.ListServiceParticipantConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceParticipantConversationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/ParticipantConversations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
          { name: "Address", value: request.address, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceParticipantConversationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ParticipantConversationApi {
  export type ListParticipantConversationRequest = {
    /**
     * A unique string identifier for the conversation participant as [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is
     * non-null if (and only if) the participant is using the Conversations SDK to communicate.
     * Limited to 256 characters.
     */
    identity?: string;
    /**
     * A unique string identifier for the conversation participant who's not a Conversation User.
     * This parameter could be found in messaging_binding.address field of Participant resource. It
     * should be url-encoded.
     */
    address?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceParticipantConversationRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * Conversations resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A unique string identifier for the conversation participant as [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is
     * non-null if (and only if) the participant is using the Conversations SDK to communicate.
     * Limited to 256 characters.
     */
    identity?: string;
    /**
     * A unique string identifier for the conversation participant who's not a Conversation User.
     * This parameter could be found in messaging_binding.address field of Participant resource. It
     * should be url-encoded.
     */
    address?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
