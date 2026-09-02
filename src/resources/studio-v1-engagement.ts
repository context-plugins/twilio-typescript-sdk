import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listEngagementResponseSchema,
  type ListEngagementResponse,
} from "../models/list-engagement-response.js";
import {
  studioV1FlowEngagementSchema,
  type StudioV1FlowEngagement,
} from "../models/studio-v1-flow-engagement.js";
import type { Servers } from "../servers.js";

export class StudioV1Engagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createEngagement(
    request: StudioV1Engagement.CreateEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagement, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowEngagement, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "From", value: request.from, schema: s.string() },
            {
              name: "Parameters",
              value: request.parameters,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteEngagement(
    request: StudioV1Engagement.DeleteEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
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

  fetchEngagement(
    request: StudioV1Engagement.FetchEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagement, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowEngagement, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEngagement(
    request: StudioV1Engagement.ListEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEngagementResponse, ResponseError> {
    return this.#rawClient.execute<ListEngagementResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEngagementResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1Engagement {
  export type CreateEngagementRequest = {
    flowSid: string;
    to: string;
    from: string;
    parameters?: Record<string, unknown>;
  };

  export type DeleteEngagementRequest = {
    flowSid: string;
    sid: string;
  };

  export type FetchEngagementRequest = {
    flowSid: string;
    sid: string;
  };

  export type ListEngagementRequest = {
    flowSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
