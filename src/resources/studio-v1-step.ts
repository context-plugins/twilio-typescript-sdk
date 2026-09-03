import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listStepResponseSchema, type ListStepResponse } from "../models/list-step-response.js";
import {
  studioV1FlowEngagementStepSchema,
  type StudioV1FlowEngagementStep,
} from "../models/studio-v1-flow-engagement-step.js";
import type { Servers } from "../servers.js";

export class StudioV1Step {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchStep(
    request: StudioV1Step.FetchStepRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagementStep, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowEngagementStep, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementStepSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listStep(
    request: StudioV1Step.ListStepRequest,
    options?: RequestOptions,
  ): ApiPromise<ListStepResponse, ResponseError> {
    return this.#rawClient.execute<ListStepResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStepResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1Step {
  export type FetchStepRequest = {
    flowSid: string;
    engagementSid: string;
    sid: string;
  };

  export type ListStepRequest = {
    flowSid: string;
    engagementSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
