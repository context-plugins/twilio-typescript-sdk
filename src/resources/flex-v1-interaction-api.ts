import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { flexV1InteractionSchema, type FlexV1Interaction } from "../models/flex-v1-interaction.js";
import type { Servers } from "../servers.js";

export class FlexV1InteractionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInteraction(
    request: FlexV1InteractionApi.CreateInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Interaction, ResponseError> {
    return this.#rawClient.execute<FlexV1Interaction, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Interactions"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Channel", value: request.channel, schema: s.record(s.string(), s.unknown()) },
            {
              name: "Routing",
              value: request.routing,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            {
              name: "InteractionContextSid",
              value: request.interactionContextSid,
              schema: s.optional(s.string()),
            },
            { name: "WebhookTtid", value: request.webhookTtid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchInteraction2(
    request: FlexV1InteractionApi.FetchInteraction2Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Interaction, ResponseError> {
    return this.#rawClient.execute<FlexV1Interaction, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Interactions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InteractionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInteraction(
    request: FlexV1InteractionApi.UpdateInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Interaction, ResponseError> {
    return this.#rawClient.execute<FlexV1Interaction, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Interactions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "WebhookTtid", value: request.webhookTtid, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: flexV1InteractionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InteractionApi {
  export type CreateInteractionRequest = {
    channel: Record<string, unknown>;
    routing?: Record<string, unknown>;
    interactionContextSid?: string;
    webhookTtid?: string;
  };

  export type FetchInteraction2Request = {
    sid: string;
  };

  export type UpdateInteractionRequest = {
    sid: string;
    webhookTtid?: string;
  };
}
