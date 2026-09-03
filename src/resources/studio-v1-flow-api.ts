import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listFlowResponseSchema, type ListFlowResponse } from "../models/list-flow-response.js";
import { studioV1FlowSchema, type StudioV1Flow } from "../models/studio-v1-flow.js";
import type { Servers } from "../servers.js";

export class StudioV1FlowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteFlow(
    request: StudioV1FlowApi.DeleteFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default11("/v1/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchFlow(
    request: StudioV1FlowApi.FetchFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1Flow, ResponseError> {
    return this.#rawClient.execute<StudioV1Flow, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listFlow(
    request: StudioV1FlowApi.ListFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFlowResponse, ResponseError> {
    return this.#rawClient.execute<ListFlowResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlowResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1FlowApi {
  export type DeleteFlowRequest = {
    sid: string;
  };

  export type FetchFlowRequest = {
    sid: string;
  };

  export type ListFlowRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
