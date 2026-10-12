import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InteractionInteractionChannelInteractionChannelInviteSchema,
  type FlexV1InteractionInteractionChannelInteractionChannelInvite,
} from "../models/flex-v1-interaction-interaction-channel-interaction-channel-invite.js";
import {
  listInteractionChannelInviteResponseSchema,
  type ListInteractionChannelInviteResponse,
} from "../models/list-interaction-channel-invite-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionChannelInvite {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Invite an Agent or a TaskQueue to a Channel.
   *
   * @remarks
   * Invite an Agent or a TaskQueue to a Channel.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInteractionChannelInvite(
    request: FlexV1InteractionChannelInvite.CreateInteractionChannelInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelInvite, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Routing", value: request.routing, schema: s.record(s.string(), s.unknown()) }],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionChannelInviteSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all Invites for a Channel.
   *
   * @remarks
   * List all Invites for a Channel.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInteractionChannelInvite(
    request: FlexV1InteractionChannelInvite.ListInteractionChannelInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionChannelInviteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
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
        success: { kind: "json", schema: listInteractionChannelInviteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionChannelInvite {
  export type CreateInteractionChannelInviteRequest = {
    /** The Interaction SID for this Channel. */
    interactionSid: string;
    /** The Channel SID for this Invite. */
    channelSid: string;
    /** The Interaction's routing logic. */
    routing: Record<string, unknown>;
  };

  export type ListInteractionChannelInviteRequest = {
    /** The Interaction SID for this Channel. */
    interactionSid: string;
    /** The Channel SID for this Participant. */
    channelSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
