import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexV1InteractionInteractionChannelInteractionTransferSchema,
  type FlexV1InteractionInteractionChannelInteractionTransfer,
} from "../models/flex-v1-interaction-interaction-channel-interaction-transfer.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionTransfer {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInteractionTransfer(
    request: FlexV1InteractionTransfer.CreateInteractionTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannelInteractionTransfer, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionTransferSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchInteractionTransfer(
    request: FlexV1InteractionTransfer.FetchInteractionTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannelInteractionTransfer, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionTransferSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInteractionTransfer(
    request: FlexV1InteractionTransfer.UpdateInteractionTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ResponseError> {
    return this.#rawClient.execute<FlexV1InteractionInteractionChannelInteractionTransfer, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13(
          "/v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "InteractionSid", value: request.interactionSid, schema: s.string() },
          { name: "ChannelSid", value: request.channelSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: flexV1InteractionInteractionChannelInteractionTransferSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionTransfer {
  export type CreateInteractionTransferRequest = {
    interactionSid: string;
    channelSid: string;
    body?: Record<string, unknown>;
  };

  export type FetchInteractionTransferRequest = {
    interactionSid: string;
    channelSid: string;
    sid: string;
  };

  export type UpdateInteractionTransferRequest = {
    interactionSid: string;
    channelSid: string;
    sid: string;
    body?: Record<string, unknown>;
  };
}
