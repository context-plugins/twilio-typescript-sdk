import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { engagementEnumStatusSchema, type EngagementEnumStatus } from "../models/engagement-enum-status.js";
import {
  listExecutionResponse1Schema,
  type ListExecutionResponse1,
} from "../models/list-execution-response1.js";
import {
  studioV2FlowExecutionSchema,
  type StudioV2FlowExecution,
} from "../models/studio-v2-flow-execution.js";
import type { Servers } from "../servers.js";

export class StudioV2Execution {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createExecution2(
    request: StudioV2Execution.CreateExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowExecution, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowExecution, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions"),
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
        success: { kind: "json", schema: studioV2FlowExecutionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteExecution2(
    request: StudioV2Execution.DeleteExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions/{Sid}"),
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

  fetchExecution2(
    request: StudioV2Execution.FetchExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowExecution, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowExecution, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowExecutionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listExecution2(
    request: StudioV2Execution.ListExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<ListExecutionResponse1, ResponseError> {
    return this.#rawClient.execute<ListExecutionResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => engagementEnumStatusSchema)),
          },
          { name: "DateCreatedFrom", value: request.dateCreatedFrom, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedTo", value: request.dateCreatedTo, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExecutionResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateExecution2(
    request: StudioV2Execution.UpdateExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowExecution, ResponseError> {
    return this.#rawClient.execute<StudioV2FlowExecution, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: engagementEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowExecutionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2Execution {
  export type CreateExecution2Request = {
    flowSid: string;
    to: string;
    from: string;
    parameters?: Record<string, unknown>;
  };

  export type DeleteExecution2Request = {
    flowSid: string;
    sid: string;
  };

  export type FetchExecution2Request = {
    flowSid: string;
    sid: string;
  };

  export type ListExecution2Request = {
    flowSid: string;
    status?: EngagementEnumStatus;
    dateCreatedFrom?: Date;
    dateCreatedTo?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateExecution2Request = {
    flowSid: string;
    sid: string;
    status: EngagementEnumStatus;
  };
}
