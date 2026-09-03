import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listInteractionResponseSchema,
  type ListInteractionResponse,
} from "../models/list-interaction-response.js";
import {
  proxyV1ServiceSessionInteractionSchema,
  type ProxyV1ServiceSessionInteraction,
} from "../models/proxy-v1-service-session-interaction.js";
import type { Servers } from "../servers.js";

export class ProxyV1Interaction {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteInteraction(
    request: ProxyV1Interaction.DeleteInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchInteraction(
    request: ProxyV1Interaction.FetchInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionInteraction, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSessionInteraction, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionInteractionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInteraction(
    request: ProxyV1Interaction.ListInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionResponse, ResponseError> {
    return this.#rawClient.execute<ListInteractionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProxyV1Interaction {
  export type DeleteInteractionRequest = {
    serviceSid: string;
    sessionSid: string;
    sid: string;
  };

  export type FetchInteractionRequest = {
    serviceSid: string;
    sessionSid: string;
    sid: string;
  };

  export type ListInteractionRequest = {
    serviceSid: string;
    sessionSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
