import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createInteractionChannelInvite(
    request: FlexV1InteractionChannelInvite.CreateInteractionChannelInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelInvite, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannelInteractionChannelInvite, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Routing", value: request.routing, schema: s.record(s.string(), s.unknown()) }],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionChannelInviteSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInteractionChannelInvite(
    request: FlexV1InteractionChannelInvite.ListInteractionChannelInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionChannelInviteResponse, ResponseError> {
    return this.#rawClient.execute<ListInteractionChannelInviteResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionChannelInviteResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionChannelInvite {
  export type CreateInteractionChannelInviteRequest = {
    interactionSid: string;
    channelSid: string;
    routing: Record<string, unknown>;
  };

  export type ListInteractionChannelInviteRequest = {
    interactionSid: string;
    channelSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
