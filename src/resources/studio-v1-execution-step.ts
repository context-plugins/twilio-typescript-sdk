import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Retrieve a Step.
   *
   * @remarks
   * Retrieve a Step.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchExecutionStep(
    request: StudioV1ExecutionStep.FetchExecutionStepRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecutionExecutionStep, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionExecutionStepSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Steps for an Execution.
   *
   * @remarks
   * Retrieve a list of all Steps for an Execution.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExecutionStep(
    request: StudioV1ExecutionStep.ListExecutionStepRequest,
    options?: RequestOptions,
  ): ApiPromise<ListExecutionStepResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExecutionStepResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV1ExecutionStep {
  export type FetchExecutionStepRequest = {
    /** The SID of the Flow with the Step to fetch. */
    flowSid: string;
    /** The SID of the Execution resource with the Step to fetch. */
    executionSid: string;
    /** The SID of the ExecutionStep resource to fetch. */
    sid: string;
  };

  export type ListExecutionStepRequest = {
    /** The SID of the Flow with the Steps to read. */
    flowSid: string;
    /** The SID of the Execution with the Steps to read. */
    executionSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
