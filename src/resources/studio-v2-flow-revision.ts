import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listFlowRevisionResponseSchema,
  type ListFlowRevisionResponse,
} from "../models/list-flow-revision-response.js";
import {
  studioV2FlowFlowRevisionSchema,
  type StudioV2FlowFlowRevision,
} from "../models/studio-v2-flow-flow-revision.js";
import type { Servers } from "../servers.js";

export class StudioV2FlowRevision {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchFlowRevision(
    request: StudioV2FlowRevision.FetchFlowRevisionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowFlowRevision, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowFlowRevision, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{Sid}/Revisions/{Revision}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Sid", value: request.sid, schema: s.string() },
          { name: "Revision", value: request.revision, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowFlowRevisionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listFlowRevision(
    request: StudioV2FlowRevision.ListFlowRevisionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFlowRevisionResponse, ResponseError> {
    return this.#rawClient.execute<ListFlowRevisionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{Sid}/Revisions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlowRevisionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowRevision {
  export type FetchFlowRevisionRequest = {
    sid: string;
    revision: string;
  };

  export type ListFlowRevisionRequest = {
    sid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
