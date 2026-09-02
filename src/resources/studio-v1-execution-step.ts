import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listExecutionStepResponseSchema,
  type ListExecutionStepResponse,
} from "../models/list-execution-step-response.js";
import {
  studioV1FlowExecutionExecutionStepSchema,
  type StudioV1FlowExecutionExecutionStep,
} from "../models/studio-v1-flow-execution-execution-step.js";
import type { Servers } from "../servers.js";

export class StudioV1ExecutionStep {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchExecutionStep(
    request: StudioV1ExecutionStep.FetchExecutionStepRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecutionExecutionStep, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowExecutionExecutionStep, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionExecutionStepSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listExecutionStep(
    request: StudioV1ExecutionStep.ListExecutionStepRequest,
    options?: RequestOptions,
  ): ApiPromise<ListExecutionStepResponse, ResponseError> {
    return this.#rawClient.execute<ListExecutionStepResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExecutionStepResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1ExecutionStep {
  export type FetchExecutionStepRequest = {
    flowSid: string;
    executionSid: string;
    sid: string;
  };

  export type ListExecutionStepRequest = {
    flowSid: string;
    executionSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
