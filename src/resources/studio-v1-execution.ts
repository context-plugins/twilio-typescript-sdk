import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { executionEnumStatusSchema, type ExecutionEnumStatus } from "../models/execution-enum-status.js";
import {
  listExecutionResponseSchema,
  type ListExecutionResponse,
} from "../models/list-execution-response.js";
import {
  studioV1FlowExecutionSchema,
  type StudioV1FlowExecution,
} from "../models/studio-v1-flow-execution.js";
import type { Servers } from "../servers.js";

export class StudioV1Execution {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createExecution(
    request: StudioV1Execution.CreateExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecution, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowExecution, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions"),
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
        success: { kind: "json", schema: studioV1FlowExecutionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteExecution(
    request: StudioV1Execution.DeleteExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{Sid}"),
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

  fetchExecution(
    request: StudioV1Execution.FetchExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecution, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowExecution, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listExecution(
    request: StudioV1Execution.ListExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListExecutionResponse, ResponseError> {
    return this.#rawClient.execute<ListExecutionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        query: [
          { name: "DateCreatedFrom", value: request.dateCreatedFrom, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedTo", value: request.dateCreatedTo, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExecutionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateExecution(
    request: StudioV1Execution.UpdateExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecution, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowExecution, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: executionEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1Execution {
  export type CreateExecutionRequest = {
    flowSid: string;
    to: string;
    from: string;
    parameters?: Record<string, unknown>;
  };

  export type DeleteExecutionRequest = {
    flowSid: string;
    sid: string;
  };

  export type FetchExecutionRequest = {
    flowSid: string;
    sid: string;
  };

  export type ListExecutionRequest = {
    flowSid: string;
    dateCreatedFrom?: Date;
    dateCreatedTo?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateExecutionRequest = {
    flowSid: string;
    sid: string;
    status: ExecutionEnumStatus;
  };
}
