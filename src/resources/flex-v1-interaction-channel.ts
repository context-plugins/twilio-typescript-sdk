import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InteractionInteractionChannelSchema,
  type FlexV1InteractionInteractionChannel,
} from "../models/flex-v1-interaction-interaction-channel.js";
import {
  interactionChannelEnumUpdateChannelStatusSchema,
  type InteractionChannelEnumUpdateChannelStatus,
} from "../models/interaction-channel-enum-update-channel-status.js";
import {
  listInteractionChannelResponseSchema,
  type ListInteractionChannelResponse,
} from "../models/list-interaction-channel-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionChannel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchInteractionChannel(
    request: FlexV1InteractionChannel.FetchInteractionChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannel, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannel, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInteractionChannel(
    request: FlexV1InteractionChannel.ListInteractionChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionChannelResponse, ResponseError> {
    return this.#rawClient.execute<ListInteractionChannelResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "InteractionSid", value: request.interactionSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionChannelResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInteractionChannel(
    request: FlexV1InteractionChannel.UpdateInteractionChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannel, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: interactionChannelEnumUpdateChannelStatusSchema,
            },
            {
              name: "Routing",
              value: request.routing,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionChannel {
  export type FetchInteractionChannelRequest = {
    interactionSid: string;
    sid: string;
  };

  export type ListInteractionChannelRequest = {
    interactionSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateInteractionChannelRequest = {
    interactionSid: string;
    sid: string;
    status: InteractionChannelEnumUpdateChannelStatus;
    routing?: Record<string, unknown>;
  };
}
